import { useState } from 'react';
import { Music2 } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';

interface CreatePlaylistModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function CreatePlaylistModal({ open, onOpenChange }: CreatePlaylistModalProps) {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [visibility, setVisibility] = useState<'public' | 'private'>('private');

  const handleCreate = () => {
    // Mock create action
    console.log('Creating playlist:', { name, description, visibility });
    onOpenChange(false);
    setName('');
    setDescription('');
    setVisibility('private');
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="bg-card border-border max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-3 text-foreground">
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
              <Music2 className="w-5 h-5 text-primary" />
            </div>
            Nouvelle Playlist
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6 py-4">
          {/* Name */}
          <div className="space-y-2">
            <Label htmlFor="playlist-name" className="text-foreground">
              Nom <span className="text-destructive">*</span>
            </Label>
            <Input
              id="playlist-name"
              placeholder="Ma playlist"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="bg-background border-border"
            />
          </div>

          {/* Description */}
          <div className="space-y-2">
            <Label htmlFor="playlist-description" className="text-foreground">
              Description
            </Label>
            <Textarea
              id="playlist-description"
              placeholder="Décrivez votre playlist..."
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="bg-background border-border resize-none"
              rows={3}
            />
          </div>

          {/* Visibility */}
          <div className="space-y-3">
            <Label className="text-foreground">Visibilité</Label>
            <RadioGroup
              value={visibility}
              onValueChange={(value) => setVisibility(value as 'public' | 'private')}
              className="flex gap-4"
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="public" id="public" />
                <Label 
                  htmlFor="public" 
                  className="text-muted-foreground cursor-pointer"
                >
                  Publique
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="private" id="private" />
                <Label 
                  htmlFor="private" 
                  className="text-muted-foreground cursor-pointer"
                >
                  Privée
                </Label>
              </div>
            </RadioGroup>
          </div>
        </div>

        <DialogFooter className="gap-2">
          <Button
            variant="outline"
            onClick={() => onOpenChange(false)}
            className="border-border"
          >
            Annuler
          </Button>
          <Button
            onClick={handleCreate}
            disabled={!name.trim()}
            className="bg-primary hover:bg-primary/90 text-primary-foreground"
          >
            Créer
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
