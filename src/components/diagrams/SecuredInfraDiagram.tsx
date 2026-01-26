import React from 'react';
import { Monitor, Server, Database, ArrowDown, Shuffle, Shield, Lock, Activity } from 'lucide-react';

const SecuredInfraDiagram: React.FC = () => {
  return (
    <div className="w-full max-w-4xl mx-auto p-8">
      {/* User with HTTPS */}
      <div className="flex flex-col items-center mb-4">
        <div className="flex items-center gap-3 glass px-6 py-3 rounded-xl">
          <Monitor className="w-6 h-6 text-neon-cyan" />
          <span className="font-medium">Users</span>
          <Lock className="w-4 h-4 text-success" />
        </div>
        <span className="text-xs text-success mt-1">HTTPS (SSL/TLS)</span>
        <ArrowDown className="w-5 h-5 text-muted-foreground my-2" />
      </div>

      {/* Perimeter Firewall */}
      <div className="flex flex-col items-center mb-4">
        <div className="glass px-6 py-3 rounded-xl border border-neon-orange/40 flex items-center gap-3">
          <Shield className="w-5 h-5 text-neon-orange" />
          <span className="text-sm font-medium">Firewall #1</span>
        </div>
        <ArrowDown className="w-5 h-5 text-muted-foreground my-2" />
      </div>

      {/* Load Balancer with SSL */}
      <div className="flex flex-col items-center mb-4">
        <div className="glass px-8 py-4 rounded-xl border-2 border-neon-cyan/40 glow-cyan">
          <div className="flex items-center gap-3">
            <Shuffle className="w-6 h-6 text-neon-cyan" />
            <div>
              <p className="font-semibold flex items-center gap-2">
                HAProxy
                <Lock className="w-4 h-4 text-success" />
              </p>
              <p className="text-xs text-muted-foreground">SSL Termination</p>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-16 mt-4">
          <ArrowDown className="w-5 h-5 text-muted-foreground rotate-[-20deg]" />
          <ArrowDown className="w-5 h-5 text-muted-foreground rotate-[20deg]" />
        </div>
      </div>

      {/* Backend Servers with Firewalls and Monitoring */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        {[1, 2].map((num) => (
          <div key={num} className="relative">
            {/* Server Firewall */}
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 glass px-4 py-1 rounded-full border border-neon-orange/30 flex items-center gap-2 z-10">
              <Shield className="w-4 h-4 text-neon-orange" />
              <span className="text-xs">Firewall #{num + 1}</span>
            </div>

            <div className="border border-dashed border-neon-violet/30 rounded-2xl p-5 pt-6">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-semibold uppercase tracking-wider text-neon-violet">
                  Server {num}
                </span>
                <div className="flex items-center gap-1 text-success">
                  <Activity className="w-4 h-4" />
                  <span className="text-xs">Monitoring</span>
                </div>
              </div>
              <div className="space-y-2">
                <div className="glass rounded-lg p-2 flex items-center gap-3 border border-neon-cyan/10">
                  <Server className="w-4 h-4 text-neon-cyan" />
                  <span className="text-xs">Nginx</span>
                </div>
                <div className="glass rounded-lg p-2 flex items-center gap-3 border border-neon-violet/10">
                  <Server className="w-4 h-4 text-neon-violet" />
                  <span className="text-xs">App Server</span>
                </div>
                <div className="glass rounded-lg p-2 flex items-center gap-3 border border-neon-orange/10">
                  <Database className="w-4 h-4 text-neon-orange" />
                  <span className="text-xs">MySQL</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Monitoring Platform */}
      <div className="glass rounded-xl p-4 border border-success/20">
        <div className="flex items-center justify-center gap-3">
          <Activity className="w-6 h-6 text-success" />
          <div>
            <p className="font-medium text-sm">Monitoring Platform</p>
            <p className="text-xs text-muted-foreground">Sumo Logic / Datadog / Prometheus</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecuredInfraDiagram;
