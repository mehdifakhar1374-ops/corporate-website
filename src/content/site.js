/**
 * اطلاعات شرکت، ناوبری و راههای تماس.
 *
 * تمام محتوای سایت از فایل‌های پوشه `src/content/` تغذیه می‌شود.
 * اطلاعات تماس زیر نمونه هستند — پیش از انتشار با اطلاعات واقعی شرکت جایگزین شوند.
 */

export const site = {
  name: 'خدمات مالی افق',
  shortName: 'افق',
  legalName: 'خدمات مالی افق',
  tagline: 'حسابداری · مالیات · مدیریت مالی',
  description:
    'خدمات حرفه‌ای حسابداری و مدیریت مالی که به کسب‌وکارها کمک می‌کند شفافیت، اطمینان و رشد پایدار بسازند.',
  founded: 'تأسیس ۱۳۹۱',
  nav: [
    { label: 'خانه', to: '/' },
    { label: 'درباره ما', to: '/about' },
    { label: 'خدمات', to: '/services' },
    { label: 'صنایع', to: '/#industries' },
    { label: 'رویکرد ما', to: '/#approach' },
    { label: 'تیم ما', to: '/#team' },
    { label: 'تماس', to: '/contact' },
  ],
  footerNav: [
    { label: 'خانه', to: '/' },
    { label: 'درباره ما', to: '/about' },
    { label: 'خدمات', to: '/services' },
    { label: 'صنایع', to: '/#industries' },
    { label: 'رویکرد ما', to: '/#approach' },
    { label: 'تیم ما', to: '/#team' },
    { label: 'بینش‌ها', to: '/insights' },
    { label: 'تماس', to: '/contact' },
  ],
  contact: {
    // اطلاعات نمونه — پیش از انتشار با اطلاعات واقعی شرکت جایگزین شوند.
    phone: '۰۲۱ ۸۸۷۷ ۵۵۴۴',
    phoneHref: '+982188775544',
    email: 'hello@ofoghfinancial.ir',
    addressLines: ['میدان ونک، خیابان گاندی جنوبی، پلاک ۱۲', 'طبقه پنجم، تهران', 'ایران'],
    hours: [
      { days: 'شنبه تا چهارشنبه', time: '۰۹:۰۰ – ۱۸:۰۰' },
      { days: 'پنجشنبه', time: 'با هماهنگی قبلی' },
      { days: 'جمعه', time: 'تعطیل' },
    ],
  },
  social: [
    { label: 'لینکدین', href: 'https://www.linkedin.com' },
    { label: 'اینستاگرام', href: 'https://www.instagram.com' },
    { label: 'فیسبوک', href: 'https://www.facebook.com' },
  ],
  legalNav: [
    { label: 'حریم خصوصی', to: '/privacy' },
    { label: 'شرایط استفاده', to: '/terms' },
  ],
}

export const hero = {
  eyebrow: 'حسابداری · مالیات · مدیریت مالی',
  title: ['شفافیت در امور مالی،', 'اطمینان در کسب‌وکار.'],
  text: 'خدمات حرفه‌ای حسابداری و مدیریت مالی، طراحی‌شده تا کسب‌وکارها با اطمینان فعالیت کنند، تصمیم‌های آگاهانه بگیرند و آینده مالی قوی‌تری بسازند.',
  primary: { label: 'مشاوره رزرو کنید', to: '/contact' },
  secondary: { label: 'خدمات ما را ببینید', to: '/services' },
  image: { id: '40500557', alt: 'برج‌های شیشه‌ای مدرن در غروب منطقه مالی' },
}

export const industriesOptions = [
  'خرده‌فروشی و بازرگانی',
  'خدمات حرفه‌ای',
  'تولید و صنعت',
  'ساختمان و عمران',
  'فناوری و استارتاپ‌ها',
  'سلامت و تندرستی',
  'املاک',
  'مهمان‌نوایی',
  'سایر',
]

export const companySizes = [
  '۱ تا ۱۰ کارمند',
  '۱۱ تا ۵۰ کارمند',
  '۵۱ تا ۲۰۰ کارمند',
  'بیش از ۲۰۰ کارمند',
]

export const contactMethods = ['ایمیل', 'تلفن', 'تماس تصویری']
