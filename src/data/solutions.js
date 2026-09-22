import { Zap, Shield, BarChart3, Users, Rocket, Brain } from 'lucide-react';
import aiImage from '../assets/remote/ai.webp';
import iotImage from '../assets/remote/iot.webp';
import securityImage from '../assets/remote/security.webp';
import businessImage from '../assets/remote/business.webp';
import commerceImage from '../assets/remote/commerce.webp';
import experienceImage from '../assets/remote/experience.webp';

export const solutions = [
  {
    icon: Brain,
    title: 'AI ve Görüntü Teknolojileri',
    slug: 'ai-ve-goruntu-teknolojileri',
    description: 'Yapay zekâ destekli görsel analiz ve otomasyon ile işletmenizin karar süreçlerini hızlandırır.',
    image: aiImage,
  },
  {
    icon: Zap,
    title: 'IOT ve Akıllı Operasyonlar',
    slug: 'iot-ve-akilli-operasyonlar',
    description: 'Sensörler, akıllı cihazlar ve otomasyon ile operasyonlarınızı gerçek zamanlı izleyin.',
    image: iotImage,
  },
  {
    icon: Shield,
    title: 'Bulut & Siber Güvenlik',
    slug: 'bulut-ve-siber-guvenlik',
    description: 'Verilerinizi koruyan güvenli altyapı ve gelişmiş güvenlik çözümleriyle riskleri azaltın.',
    image: securityImage,
  },
  {
    icon: BarChart3,
    title: 'İş Yazılımları',
    slug: 'is-yazilimlari',
    description: 'İş süreçlerinizi tek panodan yöneterek daha hızlı ve verimli kararlar alın.',
    image: businessImage,
  },
  {
    icon: Users,
    title: 'Fintech ve Dijital Ticaret',
    slug: 'fintech-ve-dijital-ticaret',
    description: 'Ölçeklenebilir finans ve e-ticaret çözümleriyle müşteri deneyimini ve satışları artırın.',
    image: commerceImage,
  },
  {
    icon: Rocket,
    title: 'Dijital Deneyim',
    slug: 'dijital-deneyim',
    description: 'Markanızın dijital temas noktalarını yeniden tasarlayıp kullanıcı sadakatini yükseltin.',
    image: experienceImage,
  },
];
