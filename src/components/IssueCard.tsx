import React from 'react';
import { AlertTriangle } from 'lucide-react';

interface IssueCardProps {
  title: string;
  description: string;
}

const IssueCard: React.FC<IssueCardProps> = ({ title, description }) => {
  return (
    <div className="flex items-start gap-4 p-4 rounded-lg bg-destructive/10 border border-destructive/20">
      <AlertTriangle className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />
      <div>
        <h4 className="font-semibold text-foreground mb-1">{title}</h4>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
    </div>
  );
};

export default IssueCard;
