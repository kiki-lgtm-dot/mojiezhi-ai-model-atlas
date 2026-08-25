import type { Metadata } from 'next';
import './globals.css';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL
  ?? 'https://mojiezhi-ai-model-atlas.yellow-star-3002.chatgpt.site';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: '模界志｜AI 模型厂商全景 2023—2026',
  description: '面向 AI 产品经理的模型厂商、时间线、价格与应用案例决策地图。',
  openGraph: {
    type: 'website',
    locale: 'zh_CN',
    url: siteUrl,
    siteName: '模界志',
    title: '模界志｜2023—2026 AI 模型决策地图',
    description: '24 家厂商、四年时间线、价格实验室、场景选型与真实应用案例。',
    images: [{ url: '/og.jpg', alt: '模界志｜2023—2026 AI 模型决策地图' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: '模界志｜2023—2026 AI 模型决策地图',
    description: '24 家厂商、四年时间线、价格实验室、场景选型与真实应用案例。',
    images: ['/og.jpg'],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="zh-CN"><body>{children}</body></html>;
}
