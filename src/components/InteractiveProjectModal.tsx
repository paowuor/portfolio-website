import React, { useState } from 'react';
import { X, Play, CheckCircle2, Server, Database, Shield, Zap, Calculator, Send, MessageSquare, Terminal, ExternalLink, Github, ArrowRight } from 'lucide-react';
import { Project } from '../data/portfolioData';

interface InteractiveProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const InteractiveProjectModal: React.FC<InteractiveProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-sm overflow-y-auto">
      <div 
        className="relative w-full max-w-4xl bg-[#0E1117] border border-slate-700/80 rounded-xl shadow-2xl overflow-hidden my-8"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-headline"
      >
        {/* Modal Header */}
        <div className="flex items-start justify-between p-6 border-b border-slate-800 bg-slate-900/60">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono-code text-blue-400 mb-1">
              <span>{project.category} Case Study</span>
              <span className="text-slate-600">·</span>
              <span className="text-slate-300">{project.role || 'Full-Stack'}</span>
            </div>
            <h2 id="modal-headline" className="text-2xl font-bold text-white">
              {project.title}
            </h2>
            <p className="text-sm text-slate-400 mt-1">
              {project.tagline}
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-md transition-colors"
            aria-label="Close project modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 space-y-8 max-h-[75vh] overflow-y-auto">
          
          {/* Problem → Contribution → Outcome Trinity */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 rounded-lg bg-slate-900/80 border border-slate-800">
              <span className="font-mono-code text-[11px] text-amber-400 uppercase tracking-wider block mb-1">
                The Problem
              </span>
              <p className="text-xs text-slate-300 leading-relaxed">
                {project.problem}
              </p>
            </div>

            <div className="p-4 rounded-lg bg-slate-900/80 border border-slate-800">
              <span className="font-mono-code text-[11px] text-blue-400 uppercase tracking-wider block mb-1">
                My Contribution
              </span>
              <p className="text-xs text-slate-300 leading-relaxed">
                {project.contribution}
              </p>
            </div>

            <div className="p-4 rounded-lg bg-slate-900/80 border border-slate-800">
              <span className="font-mono-code text-[11px] text-emerald-400 uppercase tracking-wider block mb-1">
                The Outcome
              </span>
              <p className="text-xs text-slate-300 leading-relaxed">
                {project.outcome}
              </p>
            </div>
          </div>

          {/* Interactive Feature Simulator Container */}
          <div className="bg-slate-950/70 border border-slate-800 rounded-xl p-5">
            <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-800">
              <div className="flex items-center gap-2">
                <Terminal className="w-4 h-4 text-blue-400" />
                <h3 className="text-sm font-semibold text-white font-mono-code">
                  Interactive Deep-Dive: {project.title}
                </h3>
              </div>
              <span className="text-[11px] font-mono-code text-slate-400">
                Live Prototype Simulator
              </span>
            </div>

            {/* Switch by project type */}
            {project.id === 'kopabridge' && <KopaBridgeSimulator />}
            {project.id === 'flexirides' && <FlexiRidesArchitectureSimulator />}
            {project.id === 'marples-cleaners' && <MarplesEstimatorSimulator />}
            {project.id === 'djnextdoor' && <DJNextDoorSimulator />}
            {project.id === 'forum' && <ForumSimulator />}
            {!['kopabridge', 'flexirides', 'marples-cleaners', 'djnextdoor', 'forum'].includes(project.id) && (
              <GenericSimulator project={project} />
            )}
          </div>

          {/* Technical Highlights list */}
          <div>
            <h3 className="text-xs font-mono-code uppercase tracking-wider text-slate-400 mb-3">
              Key Technical Deliverables
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              {project.highlights.map((h, i) => (
                <div key={i} className="flex items-center gap-2 p-2 rounded bg-slate-900/40 border border-slate-800/80 text-slate-300">
                  <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                  <span>{h}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack Unboxed */}
          <div>
            <h3 className="text-xs font-mono-code uppercase tracking-wider text-slate-400 mb-2">
              Full Technology Stack
            </h3>
            <div className="flex flex-wrap gap-2 text-xs font-mono-code text-slate-300">
              {project.technologies.map((tech) => (
                <span key={tech} className="px-2.5 py-1 bg-slate-900 border border-slate-700/80 rounded">
                  {tech}
                </span>
              ))}
            </div>
          </div>

        </div>

        {/* Modal Footer Links */}
        <div className="p-4 sm:p-6 border-t border-slate-800 bg-slate-900/60 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-slate-200 bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-md transition-colors"
              >
                <Github className="w-4 h-4" />
                <span>View on GitHub</span>
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-md transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
                <span>Live Project</span>
              </a>
            )}
          </div>

          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-medium text-slate-300 hover:text-white bg-transparent border border-slate-700 rounded-md hover:bg-slate-800 transition-colors"
          >
            Close Case Study
          </button>
        </div>

      </div>
    </div>
  );
};

/* 1. KopaBridge Interactive Normalizer Simulator */
const KopaBridgeSimulator: React.FC = () => {
  const [provider, setProvider] = useState<'sunking' | 'mkopa' | 'bboxx'>('sunking');
  const [isProcessing, setIsProcessing] = useState(false);
  const [normalizedResult, setNormalizedResult] = useState<any>(null);

  const rawPayloads = {
    sunking: {
      client_hex_id: "SK-9042-KE",
      unit_serial: "SK-PRO-300W",
      days_paid: 142,
      total_installments_expected: 180,
      late_grace_events: 2,
      last_tx_epoch: 1727683200,
      currency_code: "KES",
      total_principal_paid: 18500
    },
    mkopa: {
      account_number: "MK-KE-881920",
      product_code: "SOLAR_TV_32",
      active_tokens_bought: 210,
      missed_payment_intervals: 1,
      payment_consistency_ratio: 0.96,
      balance_remaining_cents: 420000,
      last_payment_timestamp: "2026-09-28T14:32:00Z"
    },
    bboxx: {
      customer_ref: "BBX-MSA-4491",
      device_tier: "BB_HOME_50",
      lock_status: "UNLOCKED",
      consecutive_ontime_days: 90,
      lifetime_energy_kwh: 342.5,
      credit_rating_internal: "GRADE_A"
    }
  };

  const handleNormalize = () => {
    setIsProcessing(true);
    setTimeout(() => {
      let score = 88;
      if (provider === 'mkopa') score = 92;
      if (provider === 'bboxx') score = 94;

      setNormalizedResult({
        standardized_id: `KB-PAYGO-${Math.floor(100000 + Math.random() * 900000)}`,
        provider_source: provider.toUpperCase(),
        account_status: "HEALTHY_ACTIVE",
        calculated_alternative_credit_score: score,
        credit_tier: "TIER_A_HIGH_RELIABILITY",
        payment_regularity_pct: "95.8%",
        underwriting_recommendation: "APPROVE_LOAN_FACILITY_UP_TO_KES_50000",
        normalized_at: new Date().toISOString(),
        query_response_time_ms: 78
      });
      setIsProcessing(false);
    }, 400);
  };

  return (
    <div className="space-y-4 text-xs font-mono-code">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center gap-1.5">
          <span className="text-slate-400">Select PAYGo Provider:</span>
          {(['sunking', 'mkopa', 'bboxx'] as const).map((p) => (
            <button
              key={p}
              onClick={() => {
                setProvider(p);
                setNormalizedResult(null);
              }}
              className={`px-2.5 py-1 rounded text-xs transition-colors cursor-pointer ${
                provider === p 
                  ? 'bg-blue-600 text-white font-bold' 
                  : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
              }`}
            >
              {p.toUpperCase()}
            </button>
          ))}
        </div>

        <button
          onClick={handleNormalize}
          disabled={isProcessing}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-emerald-600 hover:bg-emerald-500 text-white rounded font-medium transition-colors cursor-pointer"
        >
          {isProcessing ? 'Normalizing...' : 'Run Normalization & Score'}
          <Zap className="w-3.5 h-3.5" />
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {/* Raw Inbound Telemetry */}
        <div className="p-3 rounded bg-slate-900/90 border border-slate-800">
          <div className="text-[11px] text-amber-400 pb-1.5 border-b border-slate-800 flex justify-between">
            <span>RAW VENDOR INBOUND PAYLOAD</span>
            <span>FORMAT: {provider.toUpperCase()}</span>
          </div>
          <pre className="mt-2 text-[11px] text-slate-300 overflow-x-auto">
            {JSON.stringify(rawPayloads[provider], null, 2)}
          </pre>
        </div>

        {/* Normalized Unified Output */}
        <div className="p-3 rounded bg-slate-900/90 border border-slate-800">
          <div className="text-[11px] text-emerald-400 pb-1.5 border-b border-slate-800 flex justify-between">
            <span>KOPABRIDGE UNIFIED REST RESPONSE</span>
            <span>RFC 7807 COMPLIANT</span>
          </div>
          {normalizedResult ? (
            <pre className="mt-2 text-[11px] text-emerald-300 overflow-x-auto">
              {JSON.stringify(normalizedResult, null, 2)}
            </pre>
          ) : (
            <div className="h-40 flex flex-col items-center justify-center text-slate-500 text-center p-4">
              <Zap className="w-6 h-6 mb-2 opacity-50" />
              <span>Click "Run Normalization & Score" above to execute the data transformation pipeline.</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

/* 2. FlexiRides 13-Microservices Interactive Architecture Explorer */
const FlexiRidesArchitectureSimulator: React.FC = () => {
  const [selectedService, setSelectedService] = useState('booking');

  const services = [
    { id: 'gateway', name: 'API Gateway', port: '8080', stack: 'Spring Cloud Gateway', desc: 'Single entry point routing requests, rate-limiting, and JWT verification.' },
    { id: 'auth', name: 'Auth & Identity', port: '8081', stack: 'Spring Security + JWT', desc: 'Role-based authentication for drivers, passengers, and dispatch admins.' },
    { id: 'booking', name: 'Booking & Dispatch', port: '8084', stack: 'Spring Boot + PostgreSQL', desc: 'Core trip state machine (REQUESTED, DISPATCHED, IN_TRANSIT, COMPLETED).' },
    { id: 'driver', name: 'Driver & KYC Service', port: '8083', stack: 'Spring Boot + GraalVM', desc: 'Driver onboarding, driver license verification, and shift management.' },
    { id: 'matching', name: 'Geospatial Matching', port: '8085', stack: 'PostGIS + Redis GEO', desc: 'Calculates nearest available drivers using spherical distance algorithms.' },
    { id: 'tracking', name: 'Telemetry & Tracking', port: '8086', stack: 'WebSockets + Redis PubSub', desc: 'High-frequency vehicle coordinate ingestion and driver breadcrumbs.' },
    { id: 'payments', name: 'Payments & M-Pesa', port: '8087', stack: 'Spring Boot + Daraja API', desc: 'East African mobile money callbacks, escrow, and driver payout settlements.' },
    { id: 'pricing', name: 'Fare & Dynamic Surge', port: '8088', stack: 'Spring Boot Engine', desc: 'Dynamic fare computation considering traffic density, weather, and demand.' },
    { id: 'notifications', name: 'SMS & Push Alerts', port: '8089', stack: 'Twilio + Firebase Cloud', desc: 'Instant dispatch alerts and arrival SMS for low-connectivity users.' },
    { id: 'analytics', name: 'Analytics & Reporting', port: '8092', stack: 'Spring Batch + TimescaleDB', desc: 'Driver utilization metrics, route heatmaps, and revenue reporting.' },
  ];

  const current = services.find(s => s.id === selectedService) || services[0];

  return (
    <div className="space-y-4">
      <div className="text-xs text-slate-300">
        Click any of the core microservices to inspect its engineering specification, network port, and role in East African ride dispatch:
      </div>

      {/* Service grid pills */}
      <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
        {services.map((svc) => (
          <button
            key={svc.id}
            onClick={() => setSelectedService(svc.id)}
            className={`p-2 rounded text-left transition-all border cursor-pointer ${
              selectedService === svc.id
                ? 'bg-blue-900/60 border-blue-500 text-white shadow-sm'
                : 'bg-slate-900/60 border-slate-800 text-slate-300 hover:border-slate-700'
            }`}
          >
            <div className="text-[11px] font-mono-code font-bold truncate">{svc.name}</div>
            <div className="text-[10px] text-slate-400 font-mono-code">:{svc.port}</div>
          </button>
        ))}
      </div>

      {/* Selected Service Detail Box */}
      <div className="p-4 rounded-lg bg-slate-900 border border-slate-800 text-xs space-y-2">
        <div className="flex items-center justify-between border-b border-slate-800 pb-2">
          <div className="flex items-center gap-2">
            <Server className="w-4 h-4 text-blue-400" />
            <span className="font-bold text-white text-sm">{current.name}</span>
            <span className="text-[10px] font-mono-code bg-slate-800 px-2 py-0.5 rounded text-blue-300">Port {current.port}</span>
          </div>
          <span className="text-[11px] font-mono-code text-slate-400">Stack: {current.stack}</span>
        </div>
        
        <p className="text-slate-300 pt-1">
          {current.desc}
        </p>

        <div className="pt-2 flex items-center justify-between text-[11px] text-slate-400 font-mono-code border-t border-slate-800/80">
          <span>Project Management Focus: Service contract testing & GraalVM build optimization</span>
          <span className="text-emerald-400">STATUS: ACTIVE</span>
        </div>
      </div>
    </div>
  );
};

/* 3. Marples Cleaners Interactive Live Cost Estimator Simulator */
const MarplesEstimatorSimulator: React.FC = () => {
  const [serviceTier, setServiceTier] = useState<'standard' | 'deep' | 'move'>('standard');
  const [bedrooms, setBedrooms] = useState(2);
  const [addons, setAddons] = useState<{ carpet: boolean; sofa: boolean; windows: boolean }>({
    carpet: true,
    sofa: false,
    windows: false
  });

  const baseRates = {
    standard: 2500,
    deep: 4500,
    move: 6000
  };

  const perBedroomRates = {
    standard: 800,
    deep: 1400,
    move: 1800
  };

  const addonRates = {
    carpet: 1500,
    sofa: 2000,
    windows: 1200
  };

  const totalCost = baseRates[serviceTier] + 
    (bedrooms * perBedroomRates[serviceTier]) + 
    (addons.carpet ? addonRates.carpet : 0) + 
    (addons.sofa ? addonRates.sofa : 0) + 
    (addons.windows ? addonRates.windows : 0);

  const whatsappMessage = encodeURIComponent(
    `Hello Marples Cleaners! I would like to book a ${serviceTier.toUpperCase()} cleaning in Mombasa for a ${bedrooms}-bedroom home with addons: ${addons.carpet ? 'Carpet ' : ''}${addons.sofa ? 'Sofa ' : ''}${addons.windows ? 'Windows ' : ''}. Estimated Total: KES ${totalCost.toLocaleString()}. Please confirm availability!`
  );

  return (
    <div className="space-y-4 text-xs">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Input Parameters */}
        <div className="space-y-3">
          <div>
            <label className="block text-slate-400 font-mono-code text-[11px] mb-1">
              Select Service Tier:
            </label>
            <div className="grid grid-cols-3 gap-1.5">
              {[
                { id: 'standard', name: 'Standard' },
                { id: 'deep', name: 'Deep Clean' },
                { id: 'move', name: 'Move-In/Out' },
              ].map((tier) => (
                <button
                  key={tier.id}
                  onClick={() => setServiceTier(tier.id as any)}
                  className={`py-1.5 px-2 rounded text-center transition-colors cursor-pointer ${
                    serviceTier === tier.id 
                      ? 'bg-blue-600 text-white font-bold' 
                      : 'bg-slate-900 text-slate-300 border border-slate-800 hover:border-slate-700'
                  }`}
                >
                  {tier.name}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-slate-400 font-mono-code text-[11px] mb-1">
              Bedrooms: <span className="text-white font-bold">{bedrooms} Bedroom(s)</span>
            </label>
            <input 
              type="range" 
              min="1" 
              max="6" 
              value={bedrooms} 
              onChange={(e) => setBedrooms(parseInt(e.target.value))} 
              className="w-full accent-blue-500 cursor-pointer"
            />
            <div className="flex justify-between text-[10px] text-slate-500 font-mono-code">
              <span>1 Bed (Studio)</span>
              <span>3 Beds</span>
              <span>6 Beds (Villa)</span>
            </div>
          </div>

          <div>
            <label className="block text-slate-400 font-mono-code text-[11px] mb-1">
              Add-on Services:
            </label>
            <div className="space-y-1.5">
              <label className="flex items-center gap-2 text-slate-300 cursor-pointer">
                <input 
                  type="checkbox" 
                  checked={addons.carpet} 
                  onChange={(e) => setAddons({ ...addons, carpet: e.target.checked })} 
                  className="rounded border-slate-700 text-blue-600 focus:ring-0"
                />
                <span>Carpet Shampoo (+ KES 1,500)</span>
              </label>
              <label className="flex items-center gap-2 text-slate-300 cursor-pointer">
                <input 
                  type="checkbox" 
                  checked={addons.sofa} 
                  onChange={(e) => setAddons({ ...addons, sofa: e.target.checked })} 
                  className="rounded border-slate-700 text-blue-600 focus:ring-0"
                />
                <span>Sofa Deep Sanitization (+ KES 2,000)</span>
              </label>
              <label className="flex items-center gap-2 text-slate-300 cursor-pointer">
                <input 
                  type="checkbox" 
                  checked={addons.windows} 
                  onChange={(e) => setAddons({ ...addons, windows: e.target.checked })} 
                  className="rounded border-slate-700 text-blue-600 focus:ring-0"
                />
                <span>Exterior Glass & Window Wash (+ KES 1,200)</span>
              </label>
            </div>
          </div>
        </div>

        {/* Real-time Calculation & WhatsApp Dispatch */}
        <div className="p-4 rounded-lg bg-slate-900 border border-slate-800 flex flex-col justify-between">
          <div>
            <div className="text-[11px] font-mono-code text-slate-400 uppercase tracking-wider mb-2">
              Itemized Estimate Breakdown
            </div>
            
            <div className="space-y-1.5 text-xs text-slate-300">
              <div className="flex justify-between">
                <span>Base Tier ({serviceTier.toUpperCase()}):</span>
                <span className="font-mono-code">KES {baseRates[serviceTier].toLocaleString()}</span>
              </div>
              <div className="flex justify-between">
                <span>{bedrooms} Room Unit Surcharge:</span>
                <span className="font-mono-code">KES {(bedrooms * perBedroomRates[serviceTier]).toLocaleString()}</span>
              </div>
              {addons.carpet && (
                <div className="flex justify-between text-slate-400 text-[11px]">
                  <span>+ Carpet Cleaning:</span>
                  <span className="font-mono-code">KES 1,500</span>
                </div>
              )}
              {addons.sofa && (
                <div className="flex justify-between text-slate-400 text-[11px]">
                  <span>+ Sofa Sanitization:</span>
                  <span className="font-mono-code">KES 2,000</span>
                </div>
              )}
              {addons.windows && (
                <div className="flex justify-between text-slate-400 text-[11px]">
                  <span>+ Exterior Windows:</span>
                  <span className="font-mono-code">KES 1,200</span>
                </div>
              )}
            </div>

            <div className="mt-4 pt-3 border-t border-slate-800 flex items-center justify-between">
              <span className="font-bold text-white text-sm">Total Estimate:</span>
              <span className="font-mono-code text-emerald-400 font-bold text-lg">
                KES {totalCost.toLocaleString()}
              </span>
            </div>
          </div>

          <div className="mt-4 pt-3 border-t border-slate-800">
            <a
              href={`https://wa.me/254718676079?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 py-2 text-xs font-semibold text-white bg-emerald-600 hover:bg-emerald-500 rounded transition-colors"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Simulate Direct WhatsApp Booking</span>
            </a>
            <p className="text-[10px] text-slate-500 text-center mt-1 font-mono-code">
              Demonstrates Marples Cleaners instant client quote generation
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

/* 4. DJNextDoor Simulator */
const DJNextDoorSimulator: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [bookingSent, setBookingSent] = useState(false);

  return (
    <div className="space-y-4 text-xs">
      <div className="p-4 rounded-lg bg-slate-900 border border-slate-800 space-y-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center font-bold text-white text-xs">
              DJ
            </div>
            <div>
              <div className="font-bold text-white">DJ Spinmaster Paul</div>
              <div className="text-[11px] text-slate-400">Afrobeats · Amapiano · Live Mixing</div>
            </div>
          </div>
          <span className="font-mono-code text-[11px] text-emerald-400 bg-emerald-950/60 border border-emerald-800 px-2 py-0.5 rounded">
            ★ 4.9 (38 Gigs)
          </span>
        </div>

        {/* Audio Waveform Simulator */}
        <div className="p-3 rounded bg-slate-950 border border-slate-800/80 flex items-center gap-3">
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="w-8 h-8 rounded-full bg-blue-600 hover:bg-blue-500 text-white flex items-center justify-center shrink-0 cursor-pointer"
          >
            <Play className={`w-3.5 h-3.5 ${isPlaying ? 'animate-pulse' : ''}`} />
          </button>
          
          <div className="flex-1 space-y-1">
            <div className="flex justify-between text-[10px] font-mono-code text-slate-400">
              <span>Sunset Nairobi Afro-Fusion Set (Promo Mix)</span>
              <span>{isPlaying ? '01:24 / 45:00' : '45:00'}</span>
            </div>
            {/* Visual sound bars */}
            <div className="flex items-end gap-1 h-6">
              {[40, 60, 30, 80, 95, 45, 70, 85, 90, 65, 50, 75, 80, 40, 60, 90, 100, 70, 50, 80, 60].map((h, i) => (
                <div
                  key={i}
                  className={`flex-1 rounded-sm transition-all duration-150 ${
                    isPlaying ? 'bg-blue-500' : 'bg-slate-700'
                  }`}
                  style={{ height: isPlaying ? `${(h * Math.random()).toFixed(0)}%` : `${h * 0.5}%` }}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Booking Proposal Simulator */}
        <div className="flex items-center justify-between pt-2 border-t border-slate-800">
          <div className="text-slate-400 font-mono-code text-[11px]">
            Venue: <span className="text-white">Alchemist Bar, Westlands</span> · Date: <span className="text-white">Next Friday</span>
          </div>

          <button
            onClick={() => setBookingSent(true)}
            className="px-3 py-1.5 bg-blue-600 hover:bg-blue-500 text-white rounded text-xs font-medium cursor-pointer"
          >
            {bookingSent ? '✓ Booking Request Sent!' : 'Send Booking Request'}
          </button>
        </div>

        {bookingSent && (
          <div className="p-2 bg-emerald-950/60 border border-emerald-800 rounded text-emerald-300 text-[11px] font-mono-code">
            Success! Proposal dispatched with escrow deposit requirements and DJ automated contract link.
          </div>
        )}
      </div>
    </div>
  );
};

/* 5. Forum Simulator */
const ForumSimulator: React.FC = () => {
  const [upvotes, setUpvotes] = useState(42);
  const [hasVoted, setHasVoted] = useState(false);

  return (
    <div className="p-4 rounded-lg bg-slate-900 border border-slate-800 space-y-3 text-xs">
      <div className="flex items-start gap-3">
        <button
          onClick={() => {
            setUpvotes(hasVoted ? upvotes - 1 : upvotes + 1);
            setHasVoted(!hasVoted);
          }}
          className={`px-2 py-1 rounded flex flex-col items-center justify-center border font-mono-code cursor-pointer ${
            hasVoted ? 'bg-blue-600 text-white border-blue-500' : 'bg-slate-800 text-slate-300 border-slate-700'
          }`}
        >
          <span>▲</span>
          <span className="font-bold">{upvotes}</span>
        </button>

        <div className="flex-1 space-y-1">
          <div className="flex items-center gap-2 text-[11px] text-slate-400 font-mono-code">
            <span className="text-blue-400">#systems-programming</span>
            <span>·</span>
            <span>Posted by @zone01_dev</span>
            <span>·</span>
            <span>Go 1.22 StdLib</span>
          </div>
          <h4 className="text-sm font-bold text-white">
            Handling high concurrency with Go Channels without third-party frameworks
          </h4>
          <p className="text-slate-300 text-xs">
            Using sync.RWMutex and buffered channels to handle 10,000 requests/sec with zero memory leaks. Full SQLite persistence with WAL mode enabled.
          </p>
        </div>
      </div>
    </div>
  );
};

const GenericSimulator: React.FC<{ project: Project }> = ({ project }) => {
  return (
    <div className="p-4 rounded-lg bg-slate-900 border border-slate-800 text-xs text-slate-300 space-y-2">
      <p>{project.description}</p>
      <div className="font-mono-code text-[11px] text-blue-400">
        Engineered with {project.technologies.slice(0, 4).join(', ')}.
      </div>
    </div>
  );
};
