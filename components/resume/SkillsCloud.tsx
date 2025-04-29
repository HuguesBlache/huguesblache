// src/components/resume/SkillsCloud.tsx
import { IconCloud } from "@/components/magicui/icon-cloud";

interface SkillsCloudProps {
  slugs: string[];
}

const SkillsCloud = ({ slugs }: SkillsCloudProps) => {
  const images = slugs.map(
    (slug) => `https://cdn.simpleicons.org/${slug}/white`,
  );

  return (
    <div className="relative flex size-full items-center justify-center overflow-hidden">
      <IconCloud images={images} />
    </div>
  );
};

export default SkillsCloud;
