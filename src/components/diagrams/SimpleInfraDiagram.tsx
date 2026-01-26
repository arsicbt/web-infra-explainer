import React from 'react';
import { Monitor, Server, Database, Globe, ArrowDown } from 'lucide-react';

const SimpleInfraDiagram: React.FC = () => {
  return (
    <div className="w-full max-w-3xl mx-auto p-8">
      {/* User */}
      <div className="flex flex-col items-center mb-6">
        <div className="flex items-center gap-3 glass px-6 py-3 rounded-xl">
          <Monitor className="w-6 h-6 text-neon-cyan" />
          <span className="font-medium">User Browser</span>
        </div>
        <ArrowDown className="w-5 h-5 text-muted-foreground my-2" />
        <span className="text-xs text-muted-foreground">www.foobar.com</span>
      </div>

      {/* DNS */}
      <div className="flex flex-col items-center mb-6">
        <ArrowDown className="w-5 h-5 text-muted-foreground" />
        <div className="flex items-center gap-3 glass px-6 py-3 rounded-xl my-2 border border-neon-violet/30">
          <Globe className="w-5 h-5 text-neon-violet" />
          <div>
            <span className="font-medium text-sm">DNS</span>
            <span className="text-xs text-muted-foreground ml-2">A Record → 8.8.8.8</span>
          </div>
        </div>
        <ArrowDown className="w-5 h-5 text-muted-foreground" />
      </div>

      {/* Server */}
      <div className="border-2 border-dashed border-neon-cyan/30 rounded-2xl p-6">
        <div className="text-center mb-4">
          <span className="text-xs font-semibold uppercase tracking-wider text-neon-cyan">
            Server (8.8.8.8)
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Nginx */}
          <div className="glass rounded-xl p-4 text-center border border-neon-cyan/20">
            <Server className="w-8 h-8 text-neon-cyan mx-auto mb-2" />
            <p className="font-medium text-sm">Nginx</p>
            <p className="text-xs text-muted-foreground">Web Server</p>
          </div>

          {/* Application */}
          <div className="glass rounded-xl p-4 text-center border border-neon-violet/20">
            <Server className="w-8 h-8 text-neon-violet mx-auto mb-2" />
            <p className="font-medium text-sm">App Server</p>
            <p className="text-xs text-muted-foreground">Application Code</p>
          </div>

          {/* Database */}
          <div className="glass rounded-xl p-4 text-center border border-neon-orange/20">
            <Database className="w-8 h-8 text-neon-orange mx-auto mb-2" />
            <p className="font-medium text-sm">MySQL</p>
            <p className="text-xs text-muted-foreground">Database</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SimpleInfraDiagram;
