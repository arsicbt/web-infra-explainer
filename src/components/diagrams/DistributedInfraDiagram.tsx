import React from 'react';
import { Monitor, Server, Database, ArrowDown, ArrowRight, Shuffle } from 'lucide-react';

const DistributedInfraDiagram: React.FC = () => {
  return (
    <div className="w-full max-w-4xl mx-auto p-8">
      {/* User */}
      <div className="flex flex-col items-center mb-6">
        <div className="flex items-center gap-3 glass px-6 py-3 rounded-xl">
          <Monitor className="w-6 h-6 text-neon-cyan" />
          <span className="font-medium">Users</span>
        </div>
        <ArrowDown className="w-5 h-5 text-muted-foreground my-4" />
      </div>

      {/* Load Balancer */}
      <div className="flex flex-col items-center mb-6">
        <div className="glass px-8 py-4 rounded-xl border-2 border-neon-cyan/40 glow-cyan">
          <div className="flex items-center gap-3">
            <Shuffle className="w-6 h-6 text-neon-cyan" />
            <div>
              <p className="font-semibold">HAProxy</p>
              <p className="text-xs text-muted-foreground">Load Balancer (Round Robin)</p>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-4 mt-4">
          <ArrowDown className="w-5 h-5 text-muted-foreground rotate-[-30deg]" />
          <ArrowDown className="w-5 h-5 text-muted-foreground rotate-[30deg]" />
        </div>
      </div>

      {/* Backend Servers */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {[1, 2].map((num) => (
          <div key={num} className="border border-dashed border-neon-violet/30 rounded-2xl p-5">
            <div className="text-center mb-4">
              <span className="text-xs font-semibold uppercase tracking-wider text-neon-violet">
                Server {num}
              </span>
            </div>
            <div className="space-y-3">
              <div className="glass rounded-lg p-3 flex items-center gap-3 border border-neon-cyan/10">
                <Server className="w-5 h-5 text-neon-cyan" />
                <span className="text-sm">Nginx</span>
              </div>
              <div className="glass rounded-lg p-3 flex items-center gap-3 border border-neon-violet/10">
                <Server className="w-5 h-5 text-neon-violet" />
                <span className="text-sm">App Server</span>
              </div>
              <div className="glass rounded-lg p-3 flex items-center gap-3 border border-neon-orange/10">
                <Database className="w-5 h-5 text-neon-orange" />
                <span className="text-sm">MySQL {num === 1 ? '(Primary)' : '(Replica)'}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Database Replication */}
      <div className="flex items-center justify-center gap-4 glass rounded-xl p-4">
        <div className="text-center">
          <Database className="w-6 h-6 text-neon-orange mx-auto mb-1" />
          <p className="text-xs font-medium">Primary</p>
          <p className="text-xs text-muted-foreground">Write</p>
        </div>
        <ArrowRight className="w-6 h-6 text-neon-orange" />
        <div className="text-center">
          <Database className="w-6 h-6 text-neon-orange/60 mx-auto mb-1" />
          <p className="text-xs font-medium">Replica</p>
          <p className="text-xs text-muted-foreground">Read</p>
        </div>
      </div>
    </div>
  );
};

export default DistributedInfraDiagram;
