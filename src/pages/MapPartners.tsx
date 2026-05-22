import React, { useState, useEffect, useMemo } from "react";
import { MapContainer, TileLayer, Marker, useMap, ZoomControl } from "react-leaflet";
import { mockPartners, getPublicPartners, getPartnerRouteUrl, hasConfirmedLocation } from "../data/seed";
import L from "leaflet";
import { MapPin, Search, ExternalLink, X, Clock, Coffee, Store, Bed, Fuel, CheckCircle2, Share2, MessageCircle, ShoppingBag, Utensils, Wheat } from "lucide-react";
import { Partner } from "../types";
import { motion, AnimatePresence } from "motion/react";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import { SafePartnerImage } from "../components/SafePartnerImage";

import '../origin.css'; // Reuse map styles where applicable

function ChangeView({ center, zoom }: { center: [number, number]; zoom: number; }) {
  const map = useMap();
  useEffect(() => {
    const isDesktop = window.innerWidth >= 768;
    const targetPoint = map.project(center, zoom);
    if (isDesktop) {
      targetPoint.x -= 240;
    } else {
      targetPoint.y -= 150;
    }
    const offsetCenter = map.unproject(targetPoint, zoom);
    map.flyTo(offsetCenter, zoom, { animate: true, duration: 1.2 });
  }, [center[0], center[1], zoom, map]);
  return null;
}

export default function MapPartners() {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState<string>("Todos");
  const [activePartner, setActivePartner] = useState<Partner | null>(null);
  const [hasUserClosedPreview, setHasUserClosedPreview] = useState(false);
  const [hasAutoSelectedInitialPartner, setHasAutoSelectedInitialPartner] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Onde encontrar CofCof | Parceiros Oficiais";
  }, []);

  const categories = ["Todos", "Cafeterias", "Empórios", "Restaurantes", "Padarias", "Hotéis", "Postos", "Conveniência", "Revendas"];

  const getPartnerCategory = (partner: Partner) => partner.category || "Outros";

  const getPartnerCategoryIcon = (partner: Partner) => {
    const cat = (partner.category || "").toLowerCase();
    if (cat === "restaurante") return <Utensils size={14} />;
    if (cat === "empório" || cat === "revenda" || cat === "delicatessen") return <ShoppingBag size={14} />;
    if (cat === "padaria" || cat === "confeitaria") return <Wheat size={14} />;
    if (cat === "hotel") return <Bed size={14} />;
    if (cat === "posto" || cat === "rota cofcof" || cat.includes("rota") || partner.isRoutePartner) return <Fuel size={14} />;
    if (cat === "conveniência") return <Store size={14} />;
    if (cat === "cafeteria") return <Coffee size={14} />;
    return <MapPin size={14} />;
  };

  const getPartnerCategoryLabel = (partner: Partner) => {
    const cat = (partner.category || "").toLowerCase();
    if (cat === "empório" || cat === "delicatessen") return "Empório";
    if (cat === "padaria" || cat === "confeitaria") return "Padaria";
    if (cat === "posto" || cat === "rota cofcof" || cat.includes("rota") || partner.isRoutePartner) return "Rota CofCof";
    if (cat === "cafeteria") return "Cafeteria";
    if (cat === "restaurante") return "Restaurante";
    if (cat === "hotel") return "Hotel";
    if (cat === "conveniência") return "Conveniência";
    return partner.category || "Outros";
  };

  const filteredData = useMemo(() => {
    const normalizeText = (text: string) => text.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-z0-9\s]/g, " ").replace(/\s+/g, " ").trim();
    const term = normalizeText(searchTerm);

    return getPublicPartners().filter((p) => {
      const nName = normalizeText(p.publicName || p.name || "");
      const nCity = normalizeText(p.city || "");
      const nState = normalizeText(p.state || "");
      const nNeighborhood = normalizeText(p.neighborhood || "");
      const nCategory = normalizeText(p.category || "");
      const nAddress = normalizeText(p.fullAddress || p.address || "");
      const matchTags = p.tags?.some((tag) => normalizeText(tag).includes(term));
      const matchProducts = p.availableProducts?.some((prod) => normalizeText(prod).includes(term));
      const matchAliases = p.aliases?.some((alias) => normalizeText(alias).includes(term));

      const isRoute = term.includes("rota") && p.isRoutePartner;
      const is24h = term.includes("24") && p.isOpen24h;
      const isPosto = term.includes("posto") && (normalizeText(p.category || "").includes("posto") || p.isRoutePartner);

      const isSearchMatch = !term || nName.includes(term) || nCity.includes(term) || nState.includes(term) || nNeighborhood.includes(term) || nCategory.includes(term) || nAddress.includes(term) || matchTags || matchProducts || matchAliases || isRoute || is24h || isPosto;

      let isCategoryMatch = true;
      if (activeCategory !== "Todos") {
        const cat = activeCategory.toLowerCase();
        const pCat = getPartnerCategory(p).toLowerCase();
        if (cat === "cafeterias") isCategoryMatch = pCat === "cafeteria";
        else if (cat === "empórios") isCategoryMatch = pCat === "empório";
        else if (cat === "restaurantes") isCategoryMatch = pCat === "restaurante";
        else if (cat === "padarias") isCategoryMatch = pCat === "padaria";
        else if (cat === "hotéis") isCategoryMatch = pCat === "hotel";
        else if (cat === "postos" || cat === "rota cofcof") isCategoryMatch = pCat === "posto" || p.isRoutePartner;
        else if (cat === "conveniência") isCategoryMatch = pCat === "conveniência";
        else if (cat === "revendas") isCategoryMatch = pCat === "revenda";
        else isCategoryMatch = false;
      }

      return isSearchMatch && isCategoryMatch;
    });
  }, [searchTerm, activeCategory]);

  const selectPartner = (partnerId: string) => {
    const partner = filteredData.find((p) => p.id === partnerId) || getPublicPartners(mockPartners).find((p) => p.id === partnerId);
    if (!partner) return;
    setHasUserClosedPreview(false);
    setActivePartner(partner);
  };

  const closePreview = () => {
    setHasUserClosedPreview(true);
    setActivePartner(null);
  };

  useEffect(() => {
    if (filteredData.length > 0 && !activePartner && !hasUserClosedPreview && !hasAutoSelectedInitialPartner && window.innerWidth >= 768) {
      setActivePartner(filteredData[0]);
      setHasAutoSelectedInitialPartner(true);
    }
  }, [filteredData.length, activePartner?.id, hasUserClosedPreview, hasAutoSelectedInitialPartner]);

  useEffect(() => {
    if (!activePartner) return;
    const activePartnerStillVisible = filteredData.some((partner) => partner.id === activePartner.id);
    if (activePartnerStillVisible) return;
    if (filteredData.length > 0 && !hasUserClosedPreview) {
      setActivePartner(filteredData[0]);
      return;
    }
    setActivePartner(null);
  }, [filteredData, activePartner?.id, hasUserClosedPreview]);

  const getCategoryCount = (catName: string) => {
    const publicPartners = getPublicPartners(mockPartners);
    if (catName === "Todos") return publicPartners.length;
    return publicPartners.filter((p) => {
      const cat = catName.toLowerCase();
      const pCat = getPartnerCategory(p).toLowerCase();
      if (cat === "cafeterias") return pCat === "cafeteria";
      if (cat === "empórios") return pCat === "empório";
      if (cat === "restaurantes") return pCat === "restaurante";
      if (cat === "padarias") return pCat === "padaria";
      if (cat === "hotéis") return pCat === "hotel";
      if (cat === "postos" || cat === "rota cofcof") return pCat === "posto" || p.isRoutePartner;
      if (cat === "conveniência") return pCat === "conveniência";
      if (cat === "revendas") return pCat === "revenda";
      return false;
    }).length;
  };

  const handleOpenGoogleMaps = (partner: Partner, e?: React.MouseEvent) => {
    e?.stopPropagation();
    window.open(getPartnerRouteUrl(partner), "_blank");
  };

  const handleShare = async (partner: Partner) => {
    const url = `${window.location.origin}/parceiros/${partner.slug}`;
    const text = `Conheça ${partner.publicName}, parceiro CofCof em ${partner.neighborhood}, ${partner.city}.`;
    if (navigator.share) {
      try { await navigator.share({ title: partner.publicName, text, url }); } catch (err) {}
    } else {
      navigator.clipboard.writeText(url);
      toast.success("Link copiado para a área de transferência");
    }
  };

  const getIconSvg = (category: string, isFeatured: boolean) => {
    const cat = (category || "").toLowerCase();
    let path = '<path d="M17 8h1a4 4 0 1 1 0 8h-1"/><path d="M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4Z"/><line x1="6" y1="2" x2="6" y2="4"/><line x1="10" y1="2" x2="10" y2="4"/><line x1="14" y1="2" x2="14" y2="4"/>';
    if (cat === "restaurante") path = '<path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2"/><path d="M7 2v20"/><path d="M21 15V2v0a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7"/>';
    else if (cat === "empório" || cat === "revenda" || cat === "delicatessen") path = '<path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 0 1-8 0"/>';
    else if (cat === "padaria" || cat === "confeitaria") path = '<path d="M12 2A10 10 0 0 0 2 12c0 2.2.8 4.2 2.2 5.8a2 2 0 0 0 2.6.2l3-2.3a2 2 0 0 1 2.4 0l3 2.3a2 2 0 0 0 2.6-.2A10.1 10.1 0 0 0 22 12 10 10 0 0 0 12 2z"/><path d="M12 2v20"/><path d="M2 12h20"/>';
    else if (cat === "hotel") path = '<path d="M2 4v16"/><path d="M2 8h18a2 2 0 0 1 2 2v10"/><path d="M2 17h20"/><path d="M6 8v9"/>';
    else if (cat === "posto" || cat === "rota cofcof" || cat.includes("rota")) path = '<line x1="3" x2="15" y1="22" y2="22"/><line x1="4" x2="14" y1="9" y2="9"/><path d="M14 22V4a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v18"/><path d="M14 13h2a2 2 0 0 1 2 2v2a2 2 0 0 0 2 2h0a2 2 0 0 0 2-2V9.83a2 2 0 0 0-.59-1.42L18 5"/>';
    else if (cat === "conveniência") path = '<path d="m2 7 4.41-4.41A2 2 0 0 1 7.83 2h8.34a2 2 0 0 1 1.42.59L22 7"/><path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"/><path d="M15 22v-4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4"/><path d="M2 7h20"/><path d="M22 7v3a2 2 0 0 1-2 2v0a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 16 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 12 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 8 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 4 12v0a2 2 0 0 1-2-2V7"/>';
    return `<svg xmlns="http://www.w3.org/2000/svg" width="${isFeatured ? "24" : "18"}" height="${isFeatured ? "24" : "18"}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${path}</svg>`;
  };

  const createCustomIcon = (partner: Partner, isActive: boolean) => {
    const isFeatured = partner.featured;
    return L.divIcon({
      className: "bg-transparent border-0",
      html: `
        <div class="custom-pin-marker" style="
          background-color: ${isActive ? "var(--sand)" : isFeatured ? "var(--clay)" : "var(--black)"};
          width: ${isActive ? "48px" : isFeatured ? "40px" : "36px"};
          height: ${isActive ? "48px" : isFeatured ? "40px" : "36px"};
          border-radius: 50%;
          border: 3px solid ${isActive ? "var(--black)" : isFeatured ? "var(--black)" : "var(--sand)"};
          box-shadow: 0 8px 16px rgba(0, 0, 0, 0.5);
          display: flex;
          align-items: center;
          justify-content: center;
          color: ${isActive ? "var(--black)" : isFeatured ? "var(--black)" : "var(--sand)"};
          transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
          transform: ${isActive ? "scale(1.1) translateY(-6px)" : "scale(1)"};
          cursor: pointer;
        ">
          ${getIconSvg(partner.category, isFeatured || isActive)}
        </div>
      `,
      iconSize: isActive ? [48, 48] : isFeatured ? [40, 40] : [36, 36],
      iconAnchor: isActive ? [24, 24] : isFeatured ? [20, 20] : [18, 18],
    });
  };

  return (
    <div style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', background: 'var(--black)', overflow: 'hidden', display: 'flex', flexDirection: window.innerWidth >= 768 ? 'row' : 'column' }}>
      
      {/* Left Panel */}
      <div style={{ position: 'relative', zIndex: 30, width: window.innerWidth >= 768 ? '480px' : '100%', height: window.innerWidth >= 768 ? '100%' : '55vh', background: 'var(--black)', borderRight: window.innerWidth >= 768 ? '1px solid var(--rule-w)' : 'none', borderBottom: window.innerWidth < 768 ? '1px solid var(--rule-w)' : 'none', display: 'flex', flexDirection: 'column', paddingTop: '80px', flexShrink: 0, boxShadow: '0 0 24px rgba(0,0,0,0.5)' }}>
        <div style={{ padding: '0 32px 16px', flexShrink: 0, zIndex: 10, background: 'var(--black)' }}>
          <h1 className="display" style={{ color: 'var(--sand)', marginBottom: '8px', fontSize: '32px' }}>Onde encontrar CofCof</h1>
          <p className="body-p" style={{ color: 'rgba(246, 241, 235, 0.7)', fontSize: '14px', marginBottom: '24px' }}>Parceiros são pontos selecionados. Cada local listado aqui aproxima você de cafés com origem e frescor.</p>

          <div style={{ position: 'relative', marginBottom: '16px' }}>
            <Search size={20} style={{ position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)', color: 'var(--sub)' }} />
            <input type="text" placeholder="Busque por cidade, bairro..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} style={{ width: '100%', background: 'var(--black)', border: '1px solid var(--rule-w)', padding: '14px 48px', borderRadius: '4px', color: 'var(--sand)', outline: 'none', fontFamily: 'var(--fn)' }} />
            {searchTerm && <button onClick={() => setSearchTerm("")} style={{ position: 'absolute', right: '16px', top: '50%', transform: 'translateY(-50%)', color: 'var(--sub)', background: 'transparent', border: 'none', cursor: 'pointer' }}><X size={18} /></button>}
          </div>

          <div className="orig-map-filter">
            {categories.map((cat) => {
              const count = getCategoryCount(cat);
              if (count === 0 && cat !== "Todos") return null;
              return (
                <button key={cat} onClick={() => setActiveCategory(cat)} className={`orig-filter-btn ${activeCategory === cat ? "active" : ""}`}>
                  {cat} <span>{count}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Results List */}
        <div style={{ flex: 1, overflowY: 'auto', padding: '0 32px 32px', display: 'flex', flexDirection: 'column', gap: '8px', paddingBottom: '100px' }}>
          {filteredData.map((partner) => (
            <div key={partner.id} onClick={() => selectPartner(partner.id)} style={{ border: `1px solid ${activePartner?.id === partner.id ? 'var(--sand)' : 'var(--rule-w)'}`, background: 'var(--black)', cursor: 'pointer', display: 'flex', flexDirection: 'column', transition: 'all 0.2s' }}>
              <div style={{ display: 'flex', minHeight: '130px' }}>
                <div style={{ width: '120px', flexShrink: 0, position: 'relative', background: 'var(--parch)' }}>
                  <SafePartnerImage partner={partner} className="w-full h-full object-cover opacity-80" />
                  {partner.featured && <span className="label" style={{ position: 'absolute', top: '8px', left: '8px', background: 'var(--clay)', color: 'var(--black)', fontSize: '8px' }}>Destaque</span>}
                </div>
                <div style={{ padding: '20px', flex: 1, minWidth: 0, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px', color: 'var(--clay)' }}>
                    {getPartnerCategoryIcon(partner)}
                    <span className="label" style={{ color: 'var(--clay)' }}>{getPartnerCategoryLabel(partner)}</span>
                  </div>
                  <h3 className="display" style={{ fontSize: '18px', color: 'var(--sand)', marginBottom: '4px' }}>{partner.publicName}</h3>
                  <p className="body-p" style={{ fontSize: '12px', color: 'var(--sub)' }}>{partner.neighborhood} · {partner.city}</p>
                </div>
              </div>
            </div>
          ))}

          {filteredData.length === 0 && (
            <div style={{ textAlign: 'center', padding: '40px 16px', border: '1px solid var(--rule-w)', background: 'var(--black)' }}>
              <MapPin size={32} style={{ color: 'var(--clay)', margin: '0 auto 16px' }} />
              <h3 className="display" style={{ fontSize: '18px', color: 'var(--sand)', marginBottom: '8px' }}>Nenhum parceiro encontrado.</h3>
              <p className="body-p" style={{ fontSize: '12px', color: 'var(--sub)', marginBottom: '24px' }}>Você pode comprar online ou indicar um ponto.</p>
              <Link to="/cafes" className="btn btn-sd" style={{ fontSize: '10px', padding: '16px', display: 'block', marginBottom: '8px', textAlign: 'center' }}><span>Comprar online</span></Link>
            </div>
          )}
        </div>
      </div>

      {/* Map Area */}
      <div style={{ flex: 1, position: 'relative', height: window.innerWidth >= 768 ? '100%' : '45vh', zIndex: 0 }}>
        <MapContainer center={[-18.9, -48.2]} zoom={8} scrollWheelZoom={true} style={{ width: '100%', height: '100%' }} zoomControl={false}>
          <ZoomControl position="bottomright" />
          <TileLayer url="https://{s}.basemaps.cartocdn.com/rastertiles/dark_all/{z}/{x}/{y}{r}.png" />
          {activePartner && <ChangeView center={[activePartner.lat, activePartner.lng]} zoom={15} />}
          {filteredData.map((partner) => (
            <Marker key={partner.id} position={[partner.lat, partner.lng]} icon={createCustomIcon(partner, activePartner?.id === partner.id)} zIndexOffset={activePartner?.id === partner.id ? 1000 : 0} eventHandlers={{ click: () => selectPartner(partner.id) }} />
          ))}
        </MapContainer>
      </div>

      {/* Preview Bottom Sheet/Floating Panel */}
      <AnimatePresence>
        {activePartner && (
          <motion.div initial={{ opacity: 0, y: 100 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 100 }} style={{ position: 'fixed', bottom: window.innerWidth >= 768 ? '32px' : '16px', right: window.innerWidth >= 768 ? '32px' : '16px', left: window.innerWidth >= 768 ? 'auto' : '16px', zIndex: 2000, width: window.innerWidth >= 768 ? '420px' : 'auto', background: 'var(--black)', border: '1px solid var(--rule-w)', display: 'flex', flexDirection: 'column', maxHeight: '80vh' }}>
            <div style={{ height: '200px', position: 'relative', background: 'var(--parch)' }}>
              <SafePartnerImage partner={activePartner} className="w-full h-full object-cover opacity-80" />
              <button onClick={closePreview} style={{ position: 'absolute', top: '16px', right: '16px', background: 'rgba(0,0,0,0.5)', color: 'var(--sand)', border: 'none', padding: '8px', cursor: 'pointer', zIndex: 10 }}><X size={16} /></button>
            </div>
            <div style={{ padding: '24px', overflowY: 'auto' }}>
              <h2 className="display" style={{ fontSize: '24px', color: 'var(--sand)', marginBottom: '8px' }}>{activePartner.publicName}</h2>
              <p className="body-p" style={{ fontSize: '13px', color: 'var(--sub)', marginBottom: '24px' }}>{activePartner.shortDescription}</p>
              
              <div style={{ borderTop: '1px solid var(--rule-w)', paddingTop: '16px', marginBottom: '16px', fontSize: '12px', color: 'var(--sand)' }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', marginBottom: '8px' }}>
                  <MapPin size={16} style={{ color: 'var(--clay)', marginTop: '2px' }} />
                  <div>
                    <p>{activePartner.fullAddress || activePartner.address}</p>
                    <p style={{ color: 'var(--sub)' }}>{activePartner.neighborhood} · {activePartner.city}/{activePartner.state}</p>
                  </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                  <Clock size={16} style={{ color: 'var(--clay)', marginTop: '2px' }} />
                  <p>{activePartner.openingHours}</p>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '8px' }}>
                <button onClick={(e) => handleOpenGoogleMaps(activePartner, e)} className="btn btn-sd" style={{ flex: 1, padding: '16px', fontSize: '10px', textAlign: 'center' }}>
                  <span>{hasConfirmedLocation(activePartner) ? 'Como chegar' : 'Abrir Google Maps'}</span>
                </button>
                <Link to={`/parceiros/${activePartner.slug}`} className="btn" style={{ flex: 1, border: '1px solid var(--rule-w)', color: 'var(--sand)', padding: '16px', fontSize: '10px', textAlign: 'center' }}>
                  <span>Ver perfil →</span>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
