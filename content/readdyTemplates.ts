export interface ReaddyTemplate {
  /** File stem under /projects/readdy/templates/ (.webp cover + .mp4 hover preview). */
  slug: string;
  /** Display name shown under the card. */
  name: string;
  /** Small chips under the title, e.g. 多页面 / 含动效. */
  tags: readonly string[];
}

/**
 * Shipped Readdy templates. Covers and hover previews live in
 * `public/projects/readdy/templates/` and share the same slug.
 *
 * 浮层里用到的预览链接与 prompt 内容不在这里维护 —— 它们由
 * `scripts/build-readdy-prompts.py` 从素材包抽取，生成到
 * `content/readdyTemplatePrompts.generated.ts`。改内容请改素材包后重跑脚本。
 */
export const readdyTemplates: readonly ReaddyTemplate[] = [
  { slug: 'modern-ai-automation-consultancy', name: 'Modern AI Automation Consultancy', tags: ['多页面', '含动效'] },
  { slug: 'photography-studio-and-portfolio', name: 'Photography Studio & Portfolio', tags: ['多页面', '含动效'] },
  { slug: 'residential-remodeling-and-design-build', name: 'Residential Remodeling & Design-Build', tags: ['多页面', '含动效'] },
  { slug: 'outdoor-gear-store', name: 'Outdoor Gear Store', tags: ['多页面', '含动效'] },
  { slug: 'fine-jewelry-ecommerce-store', name: 'Fine Jewelry Ecommerce Store', tags: ['多页面', '含动效'] },
  { slug: 'modern-green-solar-energy-company', name: 'Modern Green Solar Energy Company', tags: ['多页面', '含动效'] },
  { slug: 'alpine-retreat', name: 'Alpine Retreat', tags: ['多页面', '含动效'] },
  { slug: 'warm-veterinary-clinic', name: 'Warm Veterinary Clinic', tags: ['多页面', '含动效'] },
  { slug: 'premium-private-dental-clinic', name: 'Premium Private Dental Clinic', tags: ['多页面', '含动效'] },
  { slug: 'premium-hvac-services', name: 'Premium HVAC Services', tags: ['多页面', '含动效'] },
  { slug: 'photography-studio-motion-gallery', name: 'Photography Studio Motion Gallery', tags: ['多页面', '含动效'] },
];
