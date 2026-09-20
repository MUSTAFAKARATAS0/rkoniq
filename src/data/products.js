import image1 from '../assets/1.jpg';
import image2 from '../assets/dunya.jpg';
import image3 from '../assets/hero.png';

export const productCategories = [
  { label: 'Akıllı Fabrika & Operasyon', slug: 'akilli-fabrika-operasyon' },
  { label: 'Bulut & Dijital Çalışma', slug: 'bulut-dijital-calisma' },
  { label: 'Siber Güvenlik', slug: 'siber-guvenlik' },
  { label: 'Finansal & Tahsilat Çözümleri', slug: 'finansal-tahsilat-cozumleri' },
  { label: 'İş, Süreç & Müşteri Yönetimi', slug: 'is-surec-musteri-yonetimi' }
];

export const products = [
  { id: 1, title: 'Görüntü İşleme Teknolojileri', category: 'Akıllı Fabrika & Operasyon', description: 'Görüntü işleme ve yapay zekâ ile üretim süreçlerini optimize eden bir çözüm.', image: image1, results: 'RK verecek', tech: ['React', 'Node.js', 'AI/ML'] },
  { id: 2, title: 'RFID Stok ve Depo Yönetimi', category: 'Akıllı Fabrika & Operasyon', description: 'RFID tabanlı stok ve depo yönetimi çözümü', image: image2, results: '50% reduction in administrative time', tech: ['Vue.js', 'Python', 'HIPAA Compliant'] },
  { id: 3, title: 'Akıllı Fabrika Çözümleri', category: 'Akıllı Fabrika & Operasyon', description: 'IoT tabanlı akıllı fabrika yönetim sistemi', image: image3, results: '99.9% uptime with real-time data', tech: ['Angular', 'Java', 'WebSocket'] },
  { id: 4, title: 'Enerji Yönetim Modülleri', category: 'Akıllı Fabrika & Operasyon', description: 'Enerji tüketimini optimize eden akıllı enerji yönetim modülleri', image: image1, results: '200% faster data processing', tech: ['React', 'GraphQL', 'Machine Learning'] },
  { id: 5, title: 'Dijital Etiket', category: 'Akıllı Fabrika & Operasyon', description: 'Dijital etiketleme ve ürün takibi için IoT tabanlı çözüm', image: image2, results: '40% reduction in inventory costs', tech: ['Next.js', 'PostgreSQL', 'AI Optimization'] },
  { id: 6, title: 'Araç Takip', category: 'Akıllı Fabrika & Operasyon', description: 'IoT tabanlı araç takip sistemi', image: image3, results: 'Bank-level security compliance', tech: ['React Native', 'Blockchain', 'Biometric Auth'] },
  { id: 7, title: 'Güvenli Sürüş', category: 'Akıllı Fabrika & Operasyon', description: 'IoT tabanlı güvenli sürüş sistemleri', image: image1, results: 'Bank-level security compliance', tech: ['React Native', 'Blockchain', 'Biometric Auth'] },
  { id: 8, title: 'PDKS', category: 'İş, Süreç & Müşteri Yönetimi', description: 'Personel Devam Kontrol Sistemi ile iş süreçlerini optimize eden çözüm', image: image2, results: 'Bank-level security compliance', tech: ['React Native', 'Blockchain', 'Biometric Auth'] },
  { id: 9, title: 'İK Yazılımları', category: 'İş, Süreç & Müşteri Yönetimi', description: 'İnsan kaynakları yönetimini dijitalleştiren yazılım çözümleri', image: image3, results: 'Bank-level security compliance', tech: ['React Native', 'Blockchain', 'Biometric Auth'] },
  { id: 10, title: 'Microsoft Ürünleri', category: 'Bulut & Dijital Çalışma', description: 'Microsoft 365 ve Azure tabanlı bulut çözümleri ile iş süreçlerini optimize eden platform', image: image1, results: 'Bank-level security compliance', tech: ['React Native', 'Blockchain', 'Biometric Auth'] },
  { id: 11, title: 'Google Workspace Ürünleri', category: 'Bulut & Dijital Çalışma', description: 'Google Workspace tabanlı bulut çözümleri ile iş süreçlerini optimize eden platform', image: image2, results: 'Bank-level security compliance', tech: ['React Native', 'Blockchain', 'Biometric Auth'] },
  { id: 12, title: 'Bulut Ürünleri', category: 'Bulut & Dijital Çalışma', description: 'Bulut tabanlı çözümler ile iş süreçlerini optimize eden platform', image: image3, results: 'Bank-level security compliance', tech: ['React Native', 'Blockchain', 'Biometric Auth'] },
  { id: 13, title: 'Siber Güvenlik Ürünleri', category: 'Siber Güvenlik', description: 'İleri düzey siber güvenlik çözümleri', image: image1, results: 'Bank-level security compliance', tech: ['React Native', 'Blockchain', 'Biometric Auth'] },
  { id: 14, title: 'Güvenlik / erişim / veri koruma çözümleri', category: 'Siber Güvenlik', description: 'İleri düzey siber güvenlik çözümleri', image: image2, results: 'Bank-level security compliance', tech: ['React Native', 'Blockchain', 'Biometric Auth'] },
  { id: 15, title: 'CRM Modülleri', category: 'İş, Süreç & Müşteri Yönetimi', description: 'Müşteri ilişkilerini yönetmek ve satış süreçlerini optimize etmek için CRM modülleri', image: image3, results: 'Bank-level security compliance', tech: ['React Native', 'Blockchain', 'Biometric Auth'] },
  { id: 16, title: 'Ödeme Yönetimi', category: 'Finansal & Tahsilat Çözümleri', description: 'Güvenli ve etkili ödeme süreçlerini yönetmek için çözümler', image: image1, results: 'Bank-level security compliance', tech: ['React Native', 'Blockchain', 'Biometric Auth'] },
  { id: 17, title: 'Siber Güvenlik Ürünleri', category: 'Siber Güvenlik', description: 'İleri düzey siber güvenlik çözümleri', image: image2, results: 'Bank-level security compliance', tech: ['React Native', 'Blockchain', 'Biometric Auth'] },
  { id: 18, title: 'Siber Güvenlik Ürünleri', category: 'Siber Güvenlik', description: 'İleri düzey siber güvenlik çözümleri', image: image3, results: 'Bank-level security compliance', tech: ['React Native', 'Blockchain', 'Biometric Auth'] }
];
