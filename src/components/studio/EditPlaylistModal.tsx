import { useState, useEffect } from 'react';
import { Edit2 } from 'lucide-react';
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

interface EditPlaylistModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  playlist: {
    id: string;
    name: string;
    description: string;
    isPublic: boolean;
  };
}

export function EditPlaylistModal({ open, onOpenChange, playlist }: EditPlaylistModalProps) {
  const [name, setName] = useState(playlist.name);
  const [description, setDescription] = useState(playlist.description);
  const [visibility, setVisibility] = useState<'public' | 'private'>(
    playlist.isPublic ? 'public' : 'private'
  );

  useEffect(() => {
    setName(playlist.name);
    setDescription(playlist.description);
    setVisibility(playlist.isPublic ? 'public' : 'private');
  }, [playlist]);

  const handleSave = () => {
    // Mock save action
    console.log('Saving playlist:', { name, description, visibility });
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="bg-card border-border max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-3 text-foreground">
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
              <Edit2 className="w-5 h-5 text-primary" />
            </div>
            Modifier la playlist
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6 py-4">
          {/* Name */}
          <div className="space-y-2">
            <Label htmlFor="edit-playlist-name" className="text-foreground">
              Nom <span className="text-destructive">*</span>
            </Label>
            <Input
              id="edit-playlist-name"
              placeholder="Ma playlist"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="bg-background border-border"
            />
          </div>

          {/* Description */}
          <div className="space-y-2">
            <Label htmlFor="edit-playlist-description" className="text-foreground">
              Description
            </Label>
            <Textarea
              id="edit-playlist-description"
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
                <RadioGroupItem value="public" id="edit-public" />
                <Label 
                  htmlFor="edit-public" 
                  className="text-muted-foreground cursor-pointer"
                >
                  Publique
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="private" id="edit-private" />
                <Label 
                  htmlFor="edit-private" 
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
            onClick={handleSave}
            disabled={!name.trim()}
            className="bg-primary hover:bg-primary/90 text-primary-foreground"
          >
            Enregistrer
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
