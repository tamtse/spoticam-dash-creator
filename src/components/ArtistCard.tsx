interface ArtistCardProps {
  name: string;
  image: string;
}

export const ArtistCard = ({ name, image }: ArtistCardProps) => {
  return (
    <div className="flex flex-col items-center gap-3 cursor-pointer hover-scale transition-smooth">
      <div className="w-32 h-32 rounded-full overflow-hidden bg-muted card-shadow">
        <img 
          src={image} 
          alt={name}
          className="w-full h-full object-cover"
        />
      </div>
      <p className="font-medium text-sm">{name}</p>
    </div>
  );
};
