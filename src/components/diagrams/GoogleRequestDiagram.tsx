import React from 'react';
import { Monitor, Globe, Network, Shield, Shuffle, Server, Cpu, Database, ArrowDown, ArrowRight, ArrowLeft, Lock } from 'lucide-react';

const GoogleRequestDiagram: React.FC = () => {
  return (
    <div className="w-full max-w-4xl mx-auto p-4 md:p-8">
      {/* Browser */}
      <div className="flex flex-col items-center mb-4">
        <div className="glass px-6 py-4 rounded-xl border border-neon-cyan/30">
          <div className="flex items-center gap-3">
            <Monitor className="w-6 h-6 text-neon-cyan" />
            <div>
              <p className="font-semibold">User Browser</p>
              <p className="text-xs text-neon-cyan">https://www.google.com</p>
            </div>
          </div>
        </div>
      </div>

      {/* Arrow + DNS */}
      <div className="flex flex-col items-center mb-4">
        <ArrowDown className="w-5 h-5 text-muted-foreground" />
        <div className="glass px-5 py-3 rounded-xl my-2 border border-neon-violet/30">
          <div className="flex items-center gap-3">
            <Globe className="w-5 h-5 text-neon-violet" />
            <div>
              <p className="font-medium text-sm">DNS Resolver</p>
              <p className="text-xs text-muted-foreground">Domain name resolved to IP address</p>
            </div>
          </div>
        </div>
        <ArrowDown className="w-5 h-5 text-muted-foreground" />
      </div>

      {/* TCP/IP + HTTPS Connection Label */}
      <div className="flex flex-col items-center mb-4">
        <div className="glass px-4 py-2 rounded-lg border border-neon-cyan/20">
          <div className="flex items-center gap-2">
            <Network className="w-4 h-4 text-neon-cyan" />
            <span className="text-xs font-medium">TCP connection on port 443</span>
          </div>
        </div>
        <ArrowDown className="w-5 h-5 text-muted-foreground my-1" />
        <div className="glass px-4 py-2 rounded-lg border border-neon-orange/20">
          <div className="flex items-center gap-2">
            <Lock className="w-4 h-4 text-neon-orange" />
            <span className="text-xs font-medium">Encrypted HTTPS traffic (TLS)</span>
          </div>
        </div>
        <ArrowDown className="w-5 h-5 text-muted-foreground" />
      </div>

      {/* Server-side infrastructure */}
      <div className="border-2 border-dashed border-neon-violet/30 rounded-2xl p-4 md:p-6">
        <div className="text-center mb-4">
          <span className="text-xs font-semibold uppercase tracking-wider text-neon-violet">
            Google Infrastructure
          </span>
        </div>

        {/* Firewall */}
        <div className="flex flex-col items-center mb-4">
          <div className="glass px-5 py-3 rounded-xl border border-neon-orange/30 w-full max-w-xs">
            <div className="flex items-center gap-3 justify-center">
              <Shield className="w-5 h-5 text-neon-orange" />
              <div className="text-center">
                <p className="font-medium text-sm">Firewall</p>
                <p className="text-xs text-muted-foreground">Traffic filtering & security rules</p>
              </div>
            </div>
          </div>
          <ArrowDown className="w-5 h-5 text-muted-foreground my-2" />
        </div>

        {/* Load Balancer */}
        <div className="flex flex-col items-center mb-4">
          <div className="glass px-6 py-4 rounded-xl border-2 border-neon-cyan/40 glow-cyan w-full max-w-sm">
            <div className="flex items-center gap-3 justify-center">
              <Shuffle className="w-6 h-6 text-neon-cyan" />
              <div className="text-center">
                <p className="font-semibold">Load Balancer</p>
                <p className="text-xs text-muted-foreground">Traffic distribution</p>
              </div>
            </div>
          </div>
          <ArrowDown className="w-5 h-5 text-muted-foreground my-2" />
        </div>

        {/* Web Server + App Server + Database */}
        <div className="space-y-3">
          {/* Web Server */}
          <div className="glass rounded-xl p-4 border border-neon-cyan/20">
            <div className="flex items-center gap-3">
              <Server className="w-6 h-6 text-neon-cyan flex-shrink-0" />
              <div>
                <p className="font-medium text-sm">Web Server (Nginx / Apache)</p>
                <p className="text-xs text-muted-foreground">Handles HTTP request, serves static assets</p>
              </div>
            </div>
          </div>

          <div className="flex justify-center">
            <ArrowDown className="w-5 h-5 text-muted-foreground" />
          </div>

          {/* Application Server */}
          <div className="glass rounded-xl p-4 border border-neon-violet/20">
            <div className="flex items-center gap-3">
              <Cpu className="w-6 h-6 text-neon-violet flex-shrink-0" />
              <div>
                <p className="font-medium text-sm">Application Server</p>
                <p className="text-xs text-muted-foreground">Business logic & dynamic content generation</p>
              </div>
            </div>
          </div>

          {/* Database connection */}
          <div className="flex items-center justify-center gap-4 my-2">
            <ArrowDown className="w-5 h-5 text-muted-foreground rotate-[0deg]" />
            <ArrowDown className="w-5 h-5 text-muted-foreground rotate-[180deg]" />
          </div>

          {/* Database */}
          <div className="glass rounded-xl p-4 border border-neon-orange/20">
            <div className="flex items-center gap-3">
              <Database className="w-6 h-6 text-neon-orange flex-shrink-0" />
              <div>
                <p className="font-medium text-sm">Database</p>
                <p className="text-xs text-muted-foreground">Data retrieval</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Response flow */}
      <div className="flex flex-col items-center mt-4">
        <ArrowDown className="w-5 h-5 text-muted-foreground rotate-180" />
        <div className="glass px-4 py-2 rounded-lg my-2 border border-success/30">
          <div className="flex items-center gap-2">
            <ArrowLeft className="w-4 h-4 text-success" />
            <span className="text-xs font-medium text-success">HTML/CSS/JS response</span>
          </div>
        </div>
        <ArrowDown className="w-5 h-5 text-muted-foreground rotate-180" />
        <div className="glass px-5 py-3 rounded-xl border border-neon-cyan/30 mt-2">
          <div className="flex items-center gap-3">
            <Monitor className="w-5 h-5 text-neon-cyan" />
            <p className="font-medium text-sm">Browser Renders Page</p>
          </div>
        </div>
      </div>

      {/* Caption */}
      <p className="text-center text-sm text-muted-foreground mt-6 italic">
        High-level request flow when accessing a secure web page.
      </p>
    </div>
  );
};

export default GoogleRequestDiagram;
