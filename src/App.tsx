import { useState } from 'react'
import type { FormEvent, ReactNode } from 'react'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import type { LucideIcon } from 'lucide-react'
import {
  ArrowDownRight,
  ArrowUpRight,
  BookOpen,
  Check,
  ChevronDown,
  ChevronRight,
  Church,
  GraduationCap,
  HandHeart,
  HeartHandshake,
  Mail,
  MapPin,
  Menu,
  Phone,
  Quote,
  Send,
  ShieldCheck,
  Sprout,
  UsersRound,
  X,
} from 'lucide-react'

type Program = {
  icon: LucideIcon
  number: string
  title: string
  description: string
  accent: string
}

type ChildProfile = {
  name: string
  age: string
  image?: string
  summary: string
  details: string
  dream: string
  imageAlt: string
  placeholder?: boolean
}

type BoardMember = {
  name: string
  position: string
  qualifications: string
  image: string
  imageAlt: string
}

const navLinks = [
  { label: 'What we do', href: '#programs' },
  { label: 'Get involved', href: '#get-involved' },
]

const programs: Program[] = [
  {
    icon: GraduationCap,
    number: '01',
    title: 'Education & wellbeing',
    description: 'We support children with education, scholastic materials, nutrition, healthcare, and the confidence to imagine a different future.',
    accent: 'bg-moss',
  },
  {
    icon: ShieldCheck,
    number: '02',
    title: 'Child protection',
    description: 'We believe every child has the right to life, survival, healthy development, and a childhood free from violence and exploitation.',
    accent: 'bg-[#F2D8D0]',
  },
  {
    icon: Sprout,
    number: '03',
    title: 'Economic empowerment',
    description: 'We equip women with practical business skills, counselling, and microloans that strengthen families and local livelihoods.',
    accent: 'bg-[#F3E0D4]',
  },
]

const values = ['We are the salt of the world', 'Integrity', 'Dependency', 'We are stewards', 'We are loving']

const objectives = [
  'To promote the furtherance of Christian teaching in accordance with the inerrant word of God found in the Bible, which contains the ultimate answer to the human problem.',
  'To work with the neediest and most vulnerable children we can reach — the poor of the poorest.',
  'To economically empower women, youth, and children.',
  'To promote the health of children, youth, and women.',
  'To reduce illiteracy, promote education, and enhance the skills of vulnerable women, children, and youth.',
  'To promote local participation in mission through involvement in meeting spiritual, emotional, and physical needs.',
  'To act as custodian, trustee, and manager of any property or funds for charitable or religious institutions of public character, provided they are in line with our objectives.',
  'To promote dialogue, peace building, conflict resolution, and Christian education by coordinating the strengths and resources of Christians in a united effort toward healing, conflict resolution, and reconciliation through the message of Jesus Christ and His word.',
  'To accept donations, wills, grants, and endowments for all of the purposes provided for in our objectives.',
]

const childProfiles: ChildProfile[] = [
  {
    name: 'Aber Tracy',
    age: '7 years old',
    image: '/images/children/ABER TRACY.png',
    imageAlt: 'Portrait of Aber Tracy',
    summary:
      'Tracy is a bright primary two learner who dreams of becoming a doctor.',
    details:
      'She was born on 21/5/2016 and lives with her father, a peasant farmer. Tracy is in Primary Two and is living with sickle cell. At home she helps her father clean utensils, and in her free time she enjoys dodgeball and skipping with friends.',
    dream:
      'At school, Tracy loves singing and science. She wants to become a doctor when she grows up.',
  },

  {
  name: 'Ivan',
  age: 'Primary Two learner',
  image: '/images/children/LUBANGAKENE IVAN.png',
  imageAlt: 'Portrait of Ivan',
  summary:
    'Ivan is a hardworking Primary Two learner who dreams of becoming a surveyor.',
  details:
    'He was born on 02/02/2014 and lives with both parents. His father is a peasant farmer who struggles to provide for the family, while his mother is bedridden with a liver condition. At home, Ivan helps sweep the compound and cooks food for his siblings. In his free time, he enjoys playing soccer with his friends.',
  dream:
    'Ivan enjoys studying Mathematics at school and hopes to become a surveyor when he grows up. Your support and prayers can help him continue his education and work toward his dream.',
}
,
{
  name: 'Mideyo Happy Ruth',
  age: '14 years old',
  image: '/images/children/MIDEYO HAPPY RUTH.png',
  imageAlt: 'Portrait of Mideyo Happy Ruth',
  summary:
    'Ruth is a creative Senior Two learner who enjoys Fine Art and dreams of becoming an architect.',
  details:
    'She was born on 09/02/2009 and lives with her mother. Her father passed away in 2018. Ruth is the fifth of nine children, and her mother is a peasant farmer. At home, Ruth helps care for her siblings, cooks, and assists with housework. In her free time, she enjoys playing dodgeball with her friends and drawing pictures.',
  dream:
    'Ruth loves Fine Art and designing at school. Your kind heart, support, and prayers can help her receive the assistance she needs to develop her potential and achieve her dream of becoming an architect.',
},

{
  name: 'Lamaro Prisca',
  age: 'Age to be confirmed',
  image: '/images/children/LAMARO PRISCA.png',
  imageAlt: 'Portrait of Lamaro Prisca',
  summary:
    'Prisca is a caring learner who enjoys Social Studies and dreams of becoming an accountant.',
  details:
    'She was born on 07/12/2015 and lives with her mother, whose eyesight has been seriously affected by her health condition and medication. Prisca is the second-born child in her family and has an older sister. Her mother is also caring for a young boy who is about four years old. At home, Prisca helps with cooking and fetching water. In her free time, she enjoys playing dodgeball and skipping with her friends.',
  dream:
    'Social Studies is Prisca’s favourite subject at school, and she hopes to become an accountant when she grows up. Your kind heart, support, and prayers can help her receive the assistance she needs to develop her potential.',
},

{
  name: 'Lakony Genesis',
  age: '6 years old',
  image: '/images/children/LAKONY GENESIS.png',
  imageAlt: 'Portrait of Lakony Genesis',
  summary:
    'Genesis is a friendly Primary One learner who dreams of becoming a pilot.',
  details:
    'He was born on 01/08/2016 and lives with his mother, who is a peasant farmer. His father passed away in 2018 after experiencing heart problems. Genesis is in Primary One. At home, he enjoys playing soccer with his friends, and at school he loves making new friends.',
  dream:
    'Genesis hopes to become a pilot when he grows up. Your kind heart, support, and prayers can help him receive the assistance he needs to grow, learn, and develop his potential.',
},

  {
  name: 'Aber Dorcas Timothy',
  age: '7 years old',
  image: '/images/children/ABER DORCAS TIMOTHY.png',
  imageAlt: 'Portrait of Aber Dorcas Timothy',
  summary:
    'Dorcas is a curious Primary One learner who loves Science and dreams of becoming a teacher.',
  details:
    'She was born on 14/05/2016 and lives with both parents. Her father is a peasant farmer who struggles to provide school fees and scholastic materials. Her mother is living with Hepatitis B, and the cost of ongoing medication has placed a heavy burden on the family. At home, Dorcas enjoys playing skipping rope with her friends.',
  dream:
    'Dorcas loves studying Science at school and hopes to become a teacher. Your kind support and prayers can help her continue her education and realize her potential.',
},

{
  name: 'Ajalorwot Mercy',
  age: '12 years old',
  image: '/images/children/AJALORWOT MERCY.png',
  imageAlt: 'Portrait of Ajalorwot Mercy',
  summary:
    'Mercy is a responsible learner who enjoys Science and dreams of becoming a doctor.',
  details:
    'Mercy lives with her mother after her father abandoned the family. Her mother works hard selling yoghurt to travellers around the city, but the small income is not enough to meet the children’s school needs. Mercy helps care for her siblings by cooking, fetching water, washing clothes, and sometimes helping her mother sell yoghurt. In her free time, she enjoys playing dodgeball with her friends.',
  dream:
    'Mercy especially enjoys learning about Science at school and hopes to become a doctor. Your kind heart, support, and prayers can help her receive the assistance she needs to develop her potential.',
},

{
  name: 'Lamaro Noreen',
  age: '8 years old',
  image: '/images/children/LAMARO NOREEN.png',
  imageAlt: 'Portrait of Lamaro Noreen',
  summary:
    'Noreen is a caring learner who loves English and Science and dreams of becoming a teacher.',
  details:
    'Noreen was born on 25/09/2014 and lives with her mother after her father abandoned the family. She is the second-born of four children. Her mother washes clothes for other people and sells yoghurt to provide food for the family. They live in a rented grass-thatched house. Noreen helps care for her siblings, fetches water, and assists with washing clothes. In her free time, she enjoys playing dodgeball and skipping rope with her friends.',
  dream:
    'Noreen especially enjoys learning English and Science at school and hopes to become a teacher. Your kind heart, support, and prayers can help her receive the assistance she needs to develop her potential.',
},

{
  name: 'Rwotomiya Moses Arbat',
  age: '12 years old',
  image: '/images/children/RWOTOMIYA MOSES ARBAT.png',
  imageAlt: 'Portrait of Rwotomiya Moses Arbat',
  summary:
    'Moses is a hardworking learner who enjoys Mathematics and dreams of becoming an engineer.',
  details:
    'Moses lives with his mother and is the third-born child. His father, who struggled with alcohol dependency, left the family and now lives in another district after separating from Moses’s mother. Moses and his mother live in severe poverty. He helps his mother work in people’s gardens and also lays bricks to support the family. At home, he helps clean the compound, fetch water, and cook. In his free time, he enjoys playing soccer with his friends.',
  dream:
    'Moses loves studying Mathematics at school and hopes to become an engineer. Your kind heart, support, and prayers can help him receive the assistance he needs to continue his education and develop his potential.',
},

{
  name: 'AYEERWOT BLESSING',
  age: '6 years old',
  image: '/images/children/AYEERWOT BLESSING.png',
  imageAlt: 'Portrait of AYEERWOT BLESSING',
  summary:
    'Blessing is a helpful young learner who dreams of becoming a nurse.',
  details:
    'She was born on 26/12/2016 and lives with her mother after her father left the family two years ago. Her mother works in people’s gardens and washes clothes to earn an income. Blessing is the fourth-born child and helps her mother clean utensils at home. In her free time, she enjoys playing with her friends.',
  dream:
    'Blessing hopes to become a nurse when she grows up. Your prayers and support can help her continue learning and realize her full potential.',
},

{
  name: 'Tabitha Precious Kimara',
  age: '9 years old',
  image: '/images/children/TABITHA PRECIOUS KIMARA.png',
  imageAlt: 'Portrait of Tabitha Precious Kimara',
  summary:
    'Tabitha is a caring learner who enjoys Science and Social Studies and dreams of becoming a lawyer.',
  details:
    'She was born on 24/08/2012 and lives with her mother after her father passed away four years ago. Her mother sells juice and water to provide for the family. Tabitha is the second-born child and helps her mother with cooking, cleaning utensils, and caring for her siblings at home.',
  dream:
    'Tabitha especially enjoys learning Science and Social Studies at school and hopes to become a lawyer. Your kind heart, support, and prayers can help her receive the assistance she needs to develop her potential.',
},

{
  name: 'Kimara Jeremiah Savior',
  age: '12 years old',
  image: '/images/children/KIMARA JEREMIAH SAVIOR.png',
  imageAlt: 'Portrait of Kimara Jeremiah Savior',
  summary:
    'Jeremiah is a responsible learner who enjoys Mathematics and Religious Education and dreams of becoming a businessman and pastor.',
  details:
    'He was born on 18/06/2011 and lives with his mother after his father passed away four years ago. His mother sells juice and water to support the family. Jeremiah is the first-born child among four siblings. After classes and during weekends, he helps his mother sell juice to travellers around town, cooks, cleans utensils, and cares for his siblings.',
  dream:
    'Jeremiah especially enjoys Mathematics and Religious Education at school. He hopes to become a businessman and a pastor. Your kind heart, support, and prayers can help him receive the assistance he needs to develop his potential.',
},

{
  name: 'Kumagum Aron',
  age: '12 years old',
  image: '/images/children/KUMAGUM ARON.png',
  imageAlt: 'Portrait of Kumagum Aron',
  summary:
    'Aron is a hardworking learner who enjoys Social Studies and traditional dancing and dreams of becoming a teacher.',
  details:
    'He was born on 17/08/2011 and lives with his mother. Aron is the sixth-born child, and his father abandoned the family four years ago. His mother sells vegetables to provide for the household. At home, Aron helps sell vegetables by the roadside, clean utensils, and sweep the compound. In his free time, he enjoys traditional dancing with his friends.',
  dream:
    'Aron especially enjoys learning Social Studies at school and hopes to become a teacher. Your caring heart, support, and prayers can help him obtain the assistance he needs to develop his potential.',
},

  {
  name: 'Anifa Joan',
  age: '11 years old',
  image: '/images/children/ANIFA JOAN.png',
  imageAlt: 'Portrait of Anifa Joan',
  summary:
    'Joan is a caring learner who enjoys Mathematics and dreams of becoming a doctor.',
  details:
    'She was born on 14/05/2012 and lives with her mother. Joan is the third-born child. Her father passed away when she was seven years old. Her mother was a peasant farmer, but after her husband’s death, relatives took the family land, forcing them to move to town. The family currently struggles to raise money for food and receives support from Christians in their church community. At home, Joan helps her mother with cooking and cleaning utensils. In her free time, she enjoys singing and playing dodgeball with her friends.',
  dream:
    'Joan enjoys studying Mathematics at school and hopes to become a doctor. Your kind heart, support, and prayers can help her continue her education and achieve her potential.',
},

{
  name: 'Opiyo Daniel',
  age: '12 years old',
  image: '/images/children/OPIYO DANIEL.png',
  imageAlt: 'Portrait of Opiyo Daniel',
  summary:
    'Daniel is a hardworking Primary Four learner who enjoys Mathematics and Science and dreams of becoming a doctor.',
  details:
    'He was born on 12/08/2011 and is a total orphan living with his grandfather. Daniel’s mother passed away in 2021, and his father died when Daniel was five years old. His grandfather is elderly, frequently ill, and unable to walk. Daniel helps by digging in the garden, fetching water, and washing clothes. His older sister, who is 16 years old, has dropped out of school to do casual work such as washing clothes and fetching water so she can help provide food and basic needs for Daniel, their younger sister, and their grandfather. Daniel also lays bricks for other people and earns a small amount of money. In his free time, he enjoys playing football with his friends.',
  dream:
    'Daniel especially enjoys Mathematics and Science at school and hopes to become a doctor. Your kind heart, support, and prayers can help Daniel and his sisters receive the assistance they need to continue learning and develop their potential.',
},

]


const boardMembers: BoardMember[] = [
  {
    name: 'MOLLY LEAH',
    position: 'EXECUTIVE DIRECTOR',
    qualifications:
      "Master of Arts in Management (M.A Public Administration and Management), a Bachelor's Degree in Development Studies and a Post Graduate Diploma in public Administration",
    image: '/images/board/director_1.png',
    imageAlt: 'Portrait of Board member 01',
  },
  {
    name: 'Rev. ALEX ODYEK',
    position: 'CHAIRMAN',
    qualifications:
      'Bachelor Degree in Education and Theology',
    image: '/images/board/director_2.png',
    imageAlt: 'Portrait of Board member 02',
  },
  {
    name: 'REV. GEOFFREY OKELLO',
    position: 'VICE CHAIRMAN',
    qualifications:
      'Diploma in Theology',
    image: '/images/board/director_3.png',
    imageAlt: 'Portrait of Board member 03',
  },
  {
    name: 'BISHOP TOM RICHARD OKELLO',
    position: 'ADVISOR',
    qualifications:
      'Degree in Theology',
    image: '/images/board/director_4.png',
    imageAlt: 'Portrait of Board member 04',
  },
  {
    name: 'ODONGA FRANCIS',
    position: 'SECRETARY',
    qualifications:
      '.',
    image: '/images/board/director_5.png',
    imageAlt: 'Portrait of Board member 05',
  },
  {
    name: 'DIANA ADONG',
    position: 'MEMBER',
    qualifications:
      'Bachelor in Degree in Accounting and Finance',
    image: '/images/board/director_6.png',
    imageAlt: 'Portrait of Board member 06',
  },
]

function SectionIntro({ kicker, title, children, light = false }: { kicker: string; title: string; children?: ReactNode; light?: boolean }) {
  return (
    <div className={`max-w-2xl ${light ? 'text-paper' : 'text-forest'}`}>
      <p className={`eyebrow ${light ? 'text-marigold' : ''}`}>{kicker}</p>
      <h2 className="display-heading">{title}</h2>
      {children && <div className={`mt-6 max-w-xl text-base leading-7 ${light ? 'text-paper/70' : 'text-ink/70'}`}>{children}</div>}
    </div>
  )
}

function WhoWeAreMenu({ mobile = false }: { mobile?: boolean }) {
  if (mobile) {
    return (
      <div className="flex flex-col gap-3 border-b border-paper/10 pb-3">
        <Link to="/who-we-are" className="text-sm font-bold text-paper/90 hover:text-marigold">Who we are</Link>
        <Link to="/history" className="pl-3 text-sm font-medium text-paper/65 hover:text-marigold">History & founder story</Link>
      </div>
    )
  }

  return (
    <div className="group relative">
      <button type="button" className="inline-flex items-center gap-1.5 text-sm font-medium text-paper/80 transition hover:text-marigold" aria-haspopup="true">
        Who we are <ChevronDown size={14} className="transition group-hover:rotate-180" />
      </button>
      <div className="invisible absolute left-1/2 top-full z-50 w-56 -translate-x-1/2 pt-4 opacity-0 transition duration-200 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
        <div className="rounded-2xl border border-forest/10 bg-paper p-2 text-forest shadow-soft">
          <Link to="/who-we-are" className="block rounded-xl px-4 py-3 text-sm font-bold transition hover:bg-moss hover:text-leaf">Who we are</Link>
          <Link to="/history" className="block rounded-xl px-4 py-3 text-sm font-bold transition hover:bg-moss hover:text-leaf">History & founder story</Link>
        </div>
      </div>
    </div>
  )
}

function ProjectsMenu({ mobile = false }: { mobile?: boolean }) {
  if (mobile) {
    return (
      <div className="flex flex-col gap-3 border-b border-paper/10 pb-3">
        <Link to="/sponsorship" className="text-sm font-bold text-paper/90 hover:text-marigold">Projects</Link>
        <Link to="/sponsorship" className="pl-3 text-sm font-medium text-paper/65 hover:text-marigold">Child sponsorship</Link>
        <Link to="/economic-empowerment" className="pl-3 text-sm font-medium text-paper/65 hover:text-marigold">Economic empowerment</Link>
        <Link to="/child-protection" className="pl-3 text-sm font-medium text-paper/65 hover:text-marigold">Child protection</Link>
      </div>
    )
  }

  return (
    <div className="group relative">
      <button type="button" className="inline-flex items-center gap-1.5 text-sm font-medium text-paper/80 transition hover:text-marigold" aria-haspopup="true">
        Projects <ChevronDown size={14} className="transition group-hover:rotate-180" />
      </button>
      <div className="invisible absolute left-1/2 top-full z-50 w-56 -translate-x-1/2 pt-4 opacity-0 transition duration-200 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
        <div className="rounded-2xl border border-forest/10 bg-paper p-2 text-forest shadow-soft">
          <Link to="/sponsorship" className="block rounded-xl px-4 py-3 text-sm font-bold transition hover:bg-moss hover:text-leaf">Child sponsorship</Link>
          <Link to="/economic-empowerment" className="block rounded-xl px-4 py-3 text-sm font-bold transition hover:bg-moss hover:text-leaf">Economic empowerment</Link>
          <Link to="/child-protection" className="block rounded-xl px-4 py-3 text-sm font-bold transition hover:bg-moss hover:text-leaf">Child protection</Link>
        </div>
      </div>
    </div>
  )
}

function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setSubmitted(true)
  }

  return (
    <div className="overflow-hidden bg-paper text-ink">
      <div className="bg-marigold px-5 py-2 text-center text-[11px] font-bold uppercase tracking-[0.16em] text-forest sm:text-xs">
        For the love of humanity · Gulu, Northern Uganda
      </div>

      <header className="absolute left-0 right-0 top-8 z-30 text-paper">
        <div className="section-shell">
          <nav className="flex items-center justify-between border-b border-paper/20 py-5" aria-label="Main navigation">
            <a href="#top" className="group flex items-center gap-3" aria-label="Rock of Hope Mission home">
              <span className="flex h-11 w-11 items-center justify-center rounded-[1.15rem] bg-marigold text-forest shadow-lg transition group-hover:rotate-3">
                <HeartHandshake size={22} strokeWidth={2.2} />
              </span>
              <span className="leading-none">
                <span className="block font-display text-xl tracking-[-0.04em]">Rock of Hope</span>
                <span className="mt-1 block text-[9px] font-bold uppercase tracking-[0.22em] text-paper/60">Mission Uganda</span>
              </span>
            </a>

            <div className="hidden items-center gap-8 lg:flex">
              <WhoWeAreMenu />
              <ProjectsMenu />
              {navLinks.map((link) => (
                <a key={link.href} href={link.href} className="text-sm font-medium text-paper/80 transition hover:text-marigold">
                  {link.label}
                </a>
              ))}
              <a href="#donate" className="button-primary !px-4 !py-2.5">
                Donate <ArrowUpRight size={15} />
              </a>
            </div>

            <button className="rounded-full border border-paper/30 p-2 lg:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'} aria-expanded={isMenuOpen}>
              {isMenuOpen ? <X size={21} /> : <Menu size={21} />}
            </button>
          </nav>

          {isMenuOpen && (
            <div className="mt-3 rounded-3xl border border-paper/20 bg-forest/95 p-5 shadow-soft lg:hidden">
              <div className="flex flex-col gap-4">
                <WhoWeAreMenu mobile />
                <ProjectsMenu mobile />
                {navLinks.map((link) => (
                  <a key={link.href} href={link.href} onClick={() => setIsMenuOpen(false)} className="text-sm font-medium text-paper/80 hover:text-marigold">
                    {link.label}
                  </a>
                ))}
                <a href="#donate" onClick={() => setIsMenuOpen(false)} className="button-primary mt-1 w-full">
                  Donate <ArrowUpRight size={15} />
                </a>
              </div>
            </div>
          )}
        </div>
      </header>

      <main id="top">
        <section className="relative isolate min-h-[720px] overflow-hidden bg-forest text-paper lg:min-h-[790px]">
          <img src="/images/hero-children.jpg" alt="Children gathered together outside in their community" className="absolute inset-0 -z-20 h-full w-full object-cover object-center opacity-55" />
          <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(23,53,47,0.98)_0%,rgba(23,53,47,0.84)_42%,rgba(23,53,47,0.28)_100%)]" />
          <div className="hero-grain absolute inset-0 -z-10 opacity-50" />
          <div className="section-shell relative flex min-h-[720px] items-end pb-16 pt-40 lg:min-h-[790px] lg:pb-24">
            <div className="max-w-3xl">
              <p className="mb-6 inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.22em] text-marigold"><span className="h-px w-10 bg-marigold" />Love that makes room</p>
              <h1 className="max-w-3xl font-display text-5xl leading-[0.94] tracking-[-0.055em] sm:text-7xl lg:text-[6.65rem]">Hope grows when we grow <span className="text-marigold">together.</span></h1>
              <p className="mt-8 max-w-xl text-base leading-7 text-paper/75 sm:text-lg">Rock of Hope Mission is a faith-based local NGO bringing restoration to vulnerable children, women, and young people in Northern Uganda.</p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <a href="/sponsorship" className="button-primary">Sponsor a child <ArrowUpRight size={17} /></a>
                <a href="/who-we-are" className="inline-flex items-center justify-center gap-2 rounded-full border border-paper/30 px-5 py-3 text-sm font-bold text-paper transition hover:-translate-y-0.5 hover:border-marigold hover:text-marigold">Discover our story <ArrowDownRight size={17} /></a>
              </div>
              <div className="mt-12 flex flex-wrap gap-x-8 gap-y-4 border-t border-paper/20 pt-5 text-xs font-medium uppercase tracking-[0.15em] text-paper/60">
                <span>Education</span><span>Protection</span><span>Livelihoods</span><span>Community</span>
              </div>
            </div>
          </div>
          <div className="absolute bottom-8 right-8 hidden h-28 w-28 rounded-full border border-marigold/70 text-marigold lg:flex lg:items-center lg:justify-center">
            <span className="text-center font-display text-2xl leading-none">Hope<br />lives<br />here</span>
          </div>
        </section>

        <section className="bg-paper py-20 sm:py-28" id="about">
          <div className="section-shell grid gap-14 lg:grid-cols-[0.86fr_1.14fr] lg:items-center lg:gap-24">
            <div className="relative mx-auto w-full max-w-md lg:mx-0">
              <div className="absolute -left-5 -top-5 h-32 w-32 rounded-[2.5rem] bg-moss sm:-left-8 sm:-top-8" />
              <img src="/images/community-family.jpg" alt="A local family and community members sharing a moment together" className="relative aspect-[4/5] w-full rounded-[2.5rem] object-cover shadow-soft" />
              <div className="absolute -bottom-7 -right-5 max-w-[210px] rounded-[1.5rem] bg-marigold p-5 text-forest shadow-xl sm:-right-10">
                <Church size={22} strokeWidth={1.7} />
                <p className="mt-4 font-display text-xl leading-tight">A local mission with a wide-open heart.</p>
              </div>
            </div>

            <div>
              <SectionIntro kicker="Who we are" title="We believe every life can become a place of hope.">
                <p>Rock of Hope Mission is a faith-based local NGO headquartered in Gulu District, Northern Uganda. Our work begins with compassion and grows through practical action alongside the people we serve.</p>
                <p className="mt-4">Founded from a conviction to care for orphaned and vulnerable children, we now walk with families, women, and young people through education, skills training, sustainable livelihoods, and support.</p>
              </SectionIntro>
              <div className="mt-10 grid gap-5 border-t border-forest/10 pt-7 sm:grid-cols-2">
                <div><p className="text-xs font-bold uppercase tracking-[0.16em] text-clay">Our vision</p><p className="mt-2 font-display text-xl leading-tight text-forest">Sharing God&apos;s love and compassion for positive community transformation.</p></div>
                <div><p className="text-xs font-bold uppercase tracking-[0.16em] text-clay">Our mission</p><p className="mt-2 text-sm leading-6 text-ink/70">To bring hope and restoration to people experiencing suffering, with a focus on children, women, and youth.</p></div>
              </div>
              <a href="#values" className="button-ghost mt-8">Read our approach <ChevronRight size={17} /></a>
            </div>
          </div>
        </section>

        <section className="paper-grid bg-mist py-20 sm:py-28" id="programs">
          <div className="section-shell">
            <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:items-end lg:gap-20">
              <SectionIntro kicker="What we do" title="Practical care. Lasting change." />
              <div className="max-w-3xl text-base leading-7 text-ink/70">
                <p>On a daily basis, weekly, monthly, and throughout the year, our work revolves around making the community a better place for vulnerable children, women, and young people.</p>
                <p className="mt-5">For vulnerable children, we extend help through healthcare, nutrition, and education so they can live better lives and prepare for a hopeful future.</p>
                <p className="mt-5">For women, we provide economic empowerment, counselling, and relevant skills training. We believe women play a key role in raising the children and shaping the world of tomorrow.</p>
                <div className="mt-7 flex flex-col gap-4 border-t border-forest/15 pt-5 sm:flex-row sm:items-center sm:justify-between"><p className="max-w-xl text-sm leading-6 text-ink/60">Our work is made possible through donor aid and the generosity of individuals and organizations who believe in the people we serve.</p><a href="#get-involved" className="button-secondary shrink-0 self-start">Stand with the work <ArrowUpRight size={16} /></a></div>
              </div>
            </div>

            <div className="mt-14 grid gap-5 lg:grid-cols-3">
              {programs.map((program) => {
                const Icon = program.icon
                return (
                  <article key={program.number} className={`group flex min-h-[290px] flex-col justify-between rounded-[2rem] ${program.accent} p-7 transition duration-300 hover:-translate-y-1 hover:shadow-soft sm:p-8`}>
                    <div className="flex items-start justify-between"><span className="font-display text-3xl text-forest/30">{program.number}</span><span className="flex h-12 w-12 items-center justify-center rounded-full bg-paper/75 text-leaf transition group-hover:rotate-6"><Icon size={23} strokeWidth={1.8} /></span></div>
                    <div><h3 className="font-display text-3xl leading-none tracking-[-0.04em] text-forest">{program.title}</h3><p className="mt-4 text-sm leading-6 text-ink/70">{program.description}</p><a href={program.number === '01' ? '/sponsorship' : '#get-involved'} className="button-ghost mt-6">Explore <ArrowUpRight size={15} /></a></div>
                  </article>
                )
              })}
            </div>
          </div>
        </section>

        <section className="bg-paper py-20 sm:py-28" id="sponsorship">
          <div className="section-shell">
            <div className="overflow-hidden rounded-[2.5rem] bg-[#E8EFE7] lg:grid lg:grid-cols-[1.1fr_0.9fr]">
              <div className="p-8 sm:p-12 lg:p-16">
                <p className="eyebrow">Child sponsorship</p>
                <h2 className="display-heading max-w-xl">A little support can change the shape of a childhood.</h2>
                <p className="mt-6 max-w-xl text-base leading-7 text-ink/70">Our sponsorship programme is case by case, shaped around the needs of each child. Support can provide school materials, nutritious food, medical care, mentoring, life skills, and a safe place to grow.</p>
                <div className="mt-9 grid gap-3 sm:grid-cols-2">
                  {['School supplies and uniforms', 'Healthcare and nutrition', 'Mentoring and life skills', 'Protection and belonging'].map((item) => <div key={item} className="flex items-start gap-2 text-sm font-medium text-forest"><Check size={17} className="mt-0.5 shrink-0 text-leaf" />{item}</div>)}
                </div>
                <div className="mt-10 flex flex-col gap-3 sm:flex-row"><a href="#donate" className="button-primary">Sponsor with love <HeartHandshake size={17} /></a><a href="#contact" className="button-secondary">Ask a question <ChevronRight size={17} /></a></div>
              </div>
              <div className="relative min-h-[360px] overflow-hidden lg:min-h-full"><img src="/images/classroom.jpg" alt="Children learning together in a classroom" className="absolute inset-0 h-full w-full object-cover" /><div className="absolute inset-0 bg-gradient-to-t from-forest/45 to-transparent" /><p className="absolute bottom-7 left-7 right-7 font-display text-2xl leading-tight text-paper">“Every child deserves the chance to discover what they can become.”</p></div>
            </div>
          </div>
        </section>

        <section className="bg-forest py-20 text-paper sm:py-28" id="protection">
          <div className="section-shell grid gap-14 lg:grid-cols-[1fr_0.92fr] lg:items-center lg:gap-24">
            <div>
              <p className="eyebrow text-marigold">Child protection</p>
              <h2 className="display-heading max-w-xl">Protection is not an extra. It is the beginning.</h2>
              <p className="mt-6 max-w-xl text-base leading-7 text-paper/70">We are committed to protecting children from all forms of abuse and exploitation, intervening quickly, and seeking restoration and healing for children affected by harm.</p>
              <div className="mt-9 grid gap-4 sm:grid-cols-3"><div className="border-l border-marigold/60 pl-4"><p className="font-display text-2xl text-marigold">No</p><p className="mt-1 text-xs uppercase tracking-[0.14em] text-paper/60">violence is justifiable</p></div><div className="border-l border-marigold/60 pl-4"><p className="font-display text-2xl text-marigold">All</p><p className="mt-1 text-xs uppercase tracking-[0.14em] text-paper/60">violence is preventable</p></div><div className="border-l border-marigold/60 pl-4"><p className="font-display text-2xl text-marigold">Everyone</p><p className="mt-1 text-xs uppercase tracking-[0.14em] text-paper/60">has a role to play</p></div></div>
            </div>
            <div className="relative mx-auto w-full max-w-md lg:mx-0 lg:ml-auto"><div className="absolute -right-5 -top-5 h-24 w-24 rounded-full border border-marigold/60" /><div className="relative rounded-[2.5rem] bg-[#285246] p-8 sm:p-10"><Quote size={36} className="text-marigold" strokeWidth={1.5} /><p className="mt-7 font-display text-3xl leading-tight">“It&apos;s everyone&apos;s job to protect children.”</p><p className="mt-8 text-sm font-bold uppercase tracking-[0.16em] text-paper/50">Our safeguarding promise</p></div></div>
          </div>
        </section>

        <section className="bg-clay py-20 text-paper sm:py-28" id="empowerment">
          <div className="section-shell grid gap-12 lg:grid-cols-[0.87fr_1.13fr] lg:items-center lg:gap-24">
            <div className="relative order-2 lg:order-1"><img src="/images/women-empowerment.jpg" alt="Women gathered together in a community setting" className="aspect-[4/3] w-full rounded-[2.5rem] object-cover shadow-soft" /><div className="absolute -bottom-5 -right-4 hidden rounded-2xl bg-marigold p-5 text-forest sm:block"><Sprout size={25} /><p className="mt-3 max-w-[130px] font-display text-xl leading-tight">Strong families grow strong communities.</p></div></div>
            <div className="order-1 lg:order-2"><p className="eyebrow text-marigold">Economic empowerment</p><h2 className="display-heading max-w-xl">When women have room to thrive, families move forward.</h2><p className="mt-6 max-w-xl text-base leading-7 text-paper/80">Alongside counselling, we equip vulnerable women with business training and microloans so they can build sustainable livelihoods and become more responsible, supported mothers.</p><a href="#get-involved" className="mt-8 inline-flex items-center gap-2 text-sm font-bold text-paper transition hover:gap-3 hover:text-marigold">Support community-led change <ArrowUpRight size={16} /></a></div>
          </div>
        </section>

        <section className="bg-paper py-20 sm:py-28" id="values">
          <div className="section-shell grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-24"><div><p className="eyebrow">Our approach</p><h2 className="display-heading">Rooted in faith. Open to everyone.</h2></div><div><p className="max-w-2xl text-xl leading-8 text-ink/75 sm:text-2xl">We extend our network to people who are interested in the service of humanity and ready to meet spiritual, emotional, and physical needs with compassion.</p><div className="mt-10 flex flex-wrap gap-3">{values.map((value, index) => <span key={value} className={`rounded-full border px-4 py-3 text-sm font-bold ${index % 2 === 0 ? 'border-leaf/20 bg-moss text-leaf' : 'border-clay/20 bg-[#F2D8D0] text-clay'}`}>{value}</span>)}</div></div></div>
        </section>

        <section className="bg-marigold py-20 sm:py-24" id="get-involved">
          <div className="section-shell grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-end"><div><p className="eyebrow text-forest">Get involved</p><h2 className="display-heading max-w-3xl text-forest">There are many ways to share the love of Christ with a child in need.</h2></div><div><p className="text-base leading-7 text-forest/75">Your gift can help children and families in extreme need lift themselves out of poverty. Become part of the Rock of Hope Mission.</p><a href="#donate" className="mt-7 inline-flex items-center gap-2 rounded-full bg-forest px-5 py-3 text-sm font-bold text-paper transition hover:-translate-y-0.5 hover:bg-leaf">Give where it matters <ArrowUpRight size={16} /></a></div></div>
        </section>

<section className="bg-mist py-20 sm:py-28" id="board">
  <div className="section-shell">
    <div className="grid gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-end lg:gap-20">
      <div>
        <p className="eyebrow">Board of Directors</p>
        <h2 className="display-heading">
          Meet the people helping guide the mission.
        </h2>
      </div>

      <p className="max-w-2xl text-base leading-7 text-ink/70">
        Our Board of Directors provides faithful oversight, wise counsel, and
        accountability as Rock of Hope Mission serves vulnerable children,
        women, and young people.
      </p>
    </div>

    <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {boardMembers.map((member, index) => (
        <article
          key={member.name}
          className="overflow-hidden rounded-[1.75rem] border border-forest/10 bg-paper shadow-[0_18px_40px_rgba(23,53,47,0.06)]"
        >
          {/* Image source is here: src={member.image} */}
          <div className="relative aspect-[4/3] overflow-hidden bg-forest">
            <img
              src={member.image}
              alt={member.imageAlt}
              className="h-full w-full object-cover transition duration-500 hover:scale-105"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-forest/70 via-transparent to-transparent" />

            <span className="absolute left-4 top-4 rounded-full bg-marigold px-3 py-1 text-[10px] font-bold uppercase tracking-[0.15em] text-forest">
              0{index + 1} / 06
            </span>
          </div>

          <div className="p-6">
            <p className="text-xs font-bold uppercase tracking-[0.17em] text-clay">
              {member.position}
            </p>

            <h3 className="mt-2 font-display text-2xl text-forest">
              {member.name}
            </h3>

            <p className="mt-4 text-sm leading-6 text-ink/65">
              {member.qualifications}
            </p>
          </div>
        </article>
      ))}
    </div>
  </div>
</section>


        <section className="bg-paper py-20 sm:py-28" id="contact">
          <div className="section-shell grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-24">
            <div><p className="eyebrow">Contact us</p><h2 className="display-heading">Let&apos;s make room for more hope.</h2><p className="mt-6 max-w-md text-base leading-7 text-ink/70">Whether you want to sponsor a child, partner with our work, or simply learn more, we would love to hear from you.</p><div className="mt-9 space-y-5"><a href="tel:+256772965987" className="flex items-center gap-4 text-sm font-bold text-forest hover:text-leaf"><span className="flex h-11 w-11 items-center justify-center rounded-full bg-moss text-leaf"><Phone size={18} /></span>+256 772 965 987</a><a href="mailto:info@rockofhopeug.com" className="flex items-center gap-4 text-sm font-bold text-forest hover:text-leaf"><span className="flex h-11 w-11 items-center justify-center rounded-full bg-moss text-leaf"><Mail size={18} /></span>info@rockofhopeug.com</a><div className="flex items-center gap-4 text-sm font-bold text-forest"><span className="flex h-11 w-11 items-center justify-center rounded-full bg-moss text-leaf"><MapPin size={18} /></span>P. O. Box 10184, Gulu, Uganda</div></div></div>
            <div className="rounded-[2rem] bg-mist p-7 sm:p-10"><div className="mb-7 flex items-center justify-between"><div><p className="text-xs font-bold uppercase tracking-[0.18em] text-clay">Send a note</p><h3 className="mt-2 font-display text-3xl text-forest">We&apos;re listening.</h3></div><Send className="text-leaf" size={25} strokeWidth={1.6} /></div>{submitted ? <div className="rounded-2xl bg-moss p-6 text-leaf"><Check size={24} /><p className="mt-3 font-display text-2xl text-forest">Thank you for reaching out.</p><p className="mt-2 text-sm leading-6 text-ink/70">Your note is ready to be connected to the Rock of Hope team.</p></div> : <form className="space-y-4" onSubmit={handleSubmit}><label className="block"><span className="sr-only">Full name</span><input required type="text" placeholder="Full name" className="w-full rounded-xl border border-forest/10 bg-paper px-4 py-3 text-sm outline-none placeholder:text-ink/40 focus:border-leaf focus:ring-2 focus:ring-leaf/20" /></label><label className="block"><span className="sr-only">Email address</span><input required type="email" placeholder="Email address" className="w-full rounded-xl border border-forest/10 bg-paper px-4 py-3 text-sm outline-none placeholder:text-ink/40 focus:border-leaf focus:ring-2 focus:ring-leaf/20" /></label><label className="block"><span className="sr-only">How can we help?</span><textarea required rows={4} placeholder="How can we help?" className="w-full resize-none rounded-xl border border-forest/10 bg-paper px-4 py-3 text-sm outline-none placeholder:text-ink/40 focus:border-leaf focus:ring-2 focus:ring-leaf/20" /></label><button type="submit" className="button-primary w-full">Send inquiry <ArrowUpRight size={16} /></button></form>}</div>
          </div>
        </section>
      </main>

      <footer className="bg-forest py-10 text-paper" id="donate">
        <div className="section-shell"><div className="flex flex-col gap-8 border-b border-paper/15 pb-8 lg:flex-row lg:items-end lg:justify-between"><div><a href="#top" className="flex items-center gap-3"><span className="flex h-10 w-10 items-center justify-center rounded-xl bg-marigold text-forest"><HeartHandshake size={20} /></span><span className="font-display text-2xl">Rock of Hope Mission</span></a><p className="mt-4 max-w-sm text-sm leading-6 text-paper/60">For the love of humanity. Walking with vulnerable children, women, and young people in Gulu, Uganda.</p></div><div className="flex flex-wrap gap-x-6 gap-y-3 text-sm font-medium text-paper/65"><a href="#about" className="hover:text-marigold">Who we are</a><a href="#programs" className="hover:text-marigold">What we do</a><a href="/sponsorship" className="hover:text-marigold">Projects</a><a href="#contact" className="hover:text-marigold">Contact</a><a href="#donate" className="hover:text-marigold">Donate</a></div></div><div className="flex flex-col gap-3 pt-6 text-xs text-paper/40 sm:flex-row sm:items-center sm:justify-between"><span>© {new Date().getFullYear()} Rock of Hope Mission Uganda</span><span className="inline-flex items-center gap-2"><UsersRound size={14} /> Gulu, Northern Uganda</span></div></div>
      </footer>
    </div>
  )
}

function WhoWeArePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pageNavLinks = [
    { label: 'Home', href: '/' },
    { label: 'What we do', href: '/#programs' },
    { label: 'Contact', href: '/#contact' },
  ]

  return (
    <div className="overflow-hidden bg-paper text-ink">
      <div className="bg-marigold px-5 py-2 text-center text-[11px] font-bold uppercase tracking-[0.16em] text-forest sm:text-xs">
        For the love of humanity · Gulu, Northern Uganda
      </div>

      <header className="relative z-30 bg-forest text-paper">
        <div className="section-shell">
          <nav className="flex items-center justify-between border-b border-paper/20 py-5" aria-label="Main navigation">
            <a href="/" className="group flex items-center gap-3" aria-label="Rock of Hope Mission home">
              <span className="flex h-11 w-11 items-center justify-center rounded-[1.15rem] bg-marigold text-forest shadow-lg transition group-hover:rotate-3">
                <HeartHandshake size={22} strokeWidth={2.2} />
              </span>
              <span className="leading-none">
                <span className="block font-display text-xl tracking-[-0.04em]">Rock of Hope</span>
                <span className="mt-1 block text-[9px] font-bold uppercase tracking-[0.22em] text-paper/60">Mission Uganda</span>
              </span>
            </a>

            <div className="hidden items-center gap-8 lg:flex">
              <WhoWeAreMenu />
              <ProjectsMenu />
              {pageNavLinks.map((link) => (
                <a key={link.href} href={link.href} className="text-sm font-medium text-paper/80 transition hover:text-marigold">
                  {link.label}
                </a>
              ))}
              <a href="/#donate" className="button-primary !px-4 !py-2.5">
                Donate <ArrowUpRight size={15} />
              </a>
            </div>

            <button className="rounded-full border border-paper/30 p-2 lg:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'} aria-expanded={isMenuOpen}>
              {isMenuOpen ? <X size={21} /> : <Menu size={21} />}
            </button>
          </nav>

          {isMenuOpen && (
            <div className="mt-3 rounded-3xl border border-paper/20 bg-forest/95 p-5 shadow-soft lg:hidden">
              <div className="flex flex-col gap-4">
                <WhoWeAreMenu mobile />
                <ProjectsMenu mobile />
                {pageNavLinks.map((link) => (
                  <a key={link.href} href={link.href} onClick={() => setIsMenuOpen(false)} className="text-sm font-medium text-paper/80 hover:text-marigold">
                    {link.label}
                  </a>
                ))}
                <a href="/#donate" onClick={() => setIsMenuOpen(false)} className="button-primary mt-1 w-full">
                  Donate <ArrowUpRight size={15} />
                </a>
              </div>
            </div>
          )}
        </div>
      </header>

      <main>
        <section className="relative isolate overflow-hidden bg-forest py-20 text-paper sm:py-28">
          <div className="absolute right-[-8rem] top-[-7rem] -z-10 h-[28rem] w-[28rem] rounded-full border border-marigold/30" />
          <div className="absolute bottom-[-11rem] left-[-9rem] -z-10 h-[25rem] w-[25rem] rounded-full bg-leaf/40 blur-3xl" />
          <div className="section-shell grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-end lg:gap-24">
            <div>
              <div className="mb-7 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-paper/50"><a href="/" className="transition hover:text-marigold">Home</a><ChevronRight size={13} /><span className="text-marigold">Who we are</span></div>
              <p className="eyebrow text-marigold">Who we are</p>
              <h1 className="max-w-3xl font-display text-5xl leading-[0.95] tracking-[-0.055em] sm:text-7xl">A local mission with a <span className="text-marigold">wide-open heart.</span></h1>
              <p className="mt-7 max-w-2xl text-base leading-7 text-paper/70 sm:text-lg">Rock of Hope Mission is a faith-based local NGO whose major aim is to share God&apos;s love and compassion with vulnerable children for positive community transformation.</p>
            </div>
            <div className="relative mx-auto w-full max-w-md lg:ml-auto"><img src="/images/community-family.jpg" alt="Community members gathered together in Northern Uganda" className="aspect-[4/3] w-full rounded-[2.5rem] object-cover opacity-90" /><div className="absolute -bottom-6 -left-5 rounded-2xl bg-marigold p-5 text-forest shadow-xl sm:-left-8"><MapPin size={21} /><p className="mt-3 font-display text-xl leading-tight">Head office<br />Gulu District</p></div></div>
          </div>
        </section>

        <section className="bg-paper py-20 sm:py-28">
          <div className="section-shell grid gap-14 lg:grid-cols-[0.72fr_1.28fr] lg:gap-24">
            <aside className="h-fit rounded-[2rem] bg-mist p-7 lg:sticky lg:top-8 sm:p-9">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-clay">Inside this page</p>
              <div className="mt-6 space-y-4 text-sm font-bold text-forest"><a href="#approach" className="flex items-center justify-between border-b border-forest/10 pb-4 transition hover:text-leaf">Our approach <ArrowDownRight size={16} /></a><a href="#vision" className="flex items-center justify-between border-b border-forest/10 pb-4 transition hover:text-leaf">Our vision <ArrowDownRight size={16} /></a><a href="#mission" className="flex items-center justify-between transition hover:text-leaf">Our mission <ArrowDownRight size={16} /></a></div>
              <div className="mt-10 rounded-2xl bg-forest p-5 text-paper"><BookOpen size={23} className="text-marigold" /><p className="mt-4 font-display text-2xl leading-tight">Our work is rooted in faith and expressed through practical care.</p></div>
            </aside>

            <div>
              <div id="approach" className="scroll-mt-8"><p className="eyebrow">Our approach</p><h2 className="display-heading max-w-3xl">A faith that moves toward people.</h2><p className="mt-6 max-w-3xl text-base leading-7 text-ink/70">ROHM Uganda exists to serve people with compassion, integrity, and practical action. We work with the neediest and most vulnerable children we can reach, while also strengthening the women, youth, and families who make communities resilient.</p></div>

              <div className="mt-10 space-y-3">
                {objectives.map((objective, index) => <div key={objective} className="group flex gap-5 rounded-2xl border border-forest/10 bg-white/50 p-5 transition hover:border-leaf/30 hover:bg-moss/40 sm:p-6"><span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-marigold font-display text-lg text-forest">{String(index + 1).padStart(2, '0')}</span><p className="text-sm leading-6 text-ink/75 sm:text-base">{objective}</p></div>)}
              </div>

              <div className="mt-16 grid gap-5 sm:grid-cols-2">
                <div id="vision" className="scroll-mt-8 rounded-[2rem] bg-marigold p-7 text-forest sm:p-9"><div className="flex h-11 w-11 items-center justify-center rounded-full bg-forest text-marigold"><HandHeart size={21} /></div><p className="mt-7 text-xs font-bold uppercase tracking-[0.18em] text-forest/60">Our vision</p><h3 className="mt-3 font-display text-3xl leading-tight">Share God&apos;s Love and Compassion with vulnerable children for positive community transformation.</h3></div>
                <div id="mission" className="scroll-mt-8 rounded-[2rem] bg-forest p-7 text-paper sm:p-9"><div className="flex h-11 w-11 items-center justify-center rounded-full bg-marigold text-forest"><Sprout size={21} /></div><p className="mt-7 text-xs font-bold uppercase tracking-[0.18em] text-marigold">Our mission</p><h3 className="mt-3 font-display text-3xl leading-tight">To bring hope and restoration to people experiencing various forms of suffering.</h3><p className="mt-5 text-sm leading-6 text-paper/65">We focus on orphans and vulnerable children, women, and youth through quality education, sustainable livelihoods, skills training, and support that helps people realize their full potential in all circles of life.</p></div>
              </div>
            </div>
          </div>
        </section>

        <section className="paper-grid bg-mist py-20 sm:py-24">
          <div className="section-shell grid gap-8 lg:grid-cols-[1fr_1.1fr] lg:items-center lg:gap-20"><div><p className="eyebrow">A growing network</p><h2 className="display-heading">There is always room for people who want to serve humanity.</h2></div><div className="rounded-[2rem] bg-paper p-7 shadow-soft sm:p-9"><UsersRound className="text-leaf" size={27} /><p className="mt-5 text-base leading-7 text-ink/70">We are always open to extending our network with like-minded people and individuals who are interested in the service of humanity. Together, we can meet spiritual, emotional, and physical needs with dignity.</p><a href="/#contact" className="button-primary mt-7">Connect with us <ArrowUpRight size={16} /></a></div></div>
        </section>
      </main>

      <footer className="bg-forest py-10 text-paper">
        <div className="section-shell"><div className="flex flex-col gap-8 border-b border-paper/15 pb-8 lg:flex-row lg:items-end lg:justify-between"><div><a href="/" className="flex items-center gap-3"><span className="flex h-10 w-10 items-center justify-center rounded-xl bg-marigold text-forest"><HeartHandshake size={20} /></span><span className="font-display text-2xl">Rock of Hope Mission</span></a><p className="mt-4 max-w-sm text-sm leading-6 text-paper/60">For the love of humanity. Walking with vulnerable children, women, and young people in Gulu, Uganda.</p></div><div className="flex flex-wrap gap-x-6 gap-y-3 text-sm font-medium text-paper/65"><a href="/who-we-are" className="text-marigold">Who we are</a><a href="/#programs" className="hover:text-marigold">What we do</a><a href="/sponsorship" className="hover:text-marigold">Projects</a><a href="/#contact" className="hover:text-marigold">Contact</a><a href="/#donate" className="hover:text-marigold">Donate</a></div></div><div className="flex flex-col gap-3 pt-6 text-xs text-paper/40 sm:flex-row sm:items-center sm:justify-between"><span>© {new Date().getFullYear()} Rock of Hope Mission Uganda</span><span className="inline-flex items-center gap-2"><MapPin size={14} /> Gulu, Northern Uganda</span></div></div>
      </footer>
    </div>
  )
}

function HistoryPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pageNavLinks = [
    { label: 'Home', href: '/' },
    { label: 'What we do', href: '/#programs' },
    { label: 'Contact', href: '/#contact' },
  ]

  return (
    <div className="overflow-hidden bg-paper text-ink">
      <div className="bg-marigold px-5 py-2 text-center text-[11px] font-bold uppercase tracking-[0.16em] text-forest sm:text-xs">
        For the love of humanity · Gulu, Northern Uganda
      </div>

      <header className="relative z-30 bg-forest text-paper">
        <div className="section-shell">
          <nav className="flex items-center justify-between border-b border-paper/20 py-5" aria-label="Main navigation">
            <a href="/" className="group flex items-center gap-3" aria-label="Rock of Hope Mission home">
              <span className="flex h-11 w-11 items-center justify-center rounded-[1.15rem] bg-marigold text-forest shadow-lg transition group-hover:rotate-3"><HeartHandshake size={22} strokeWidth={2.2} /></span>
              <span className="leading-none"><span className="block font-display text-xl tracking-[-0.04em]">Rock of Hope</span><span className="mt-1 block text-[9px] font-bold uppercase tracking-[0.22em] text-paper/60">Mission Uganda</span></span>
            </a>
            <div className="hidden items-center gap-8 lg:flex"><WhoWeAreMenu /><ProjectsMenu />{pageNavLinks.map((link) => <a key={link.href} href={link.href} className="text-sm font-medium text-paper/80 transition hover:text-marigold">{link.label}</a>)}<a href="/#donate" className="button-primary !px-4 !py-2.5">Donate <ArrowUpRight size={15} /></a></div>
            <button className="rounded-full border border-paper/30 p-2 lg:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'} aria-expanded={isMenuOpen}>{isMenuOpen ? <X size={21} /> : <Menu size={21} />}</button>
          </nav>
          {isMenuOpen && <div className="mt-3 rounded-3xl border border-paper/20 bg-forest/95 p-5 shadow-soft lg:hidden"><div className="flex flex-col gap-4"><WhoWeAreMenu mobile /><ProjectsMenu mobile />{pageNavLinks.map((link) => <a key={link.href} href={link.href} onClick={() => setIsMenuOpen(false)} className="text-sm font-medium text-paper/80 hover:text-marigold">{link.label}</a>)}<a href="/#donate" onClick={() => setIsMenuOpen(false)} className="button-primary mt-1 w-full">Donate <ArrowUpRight size={15} /></a></div></div>}
        </div>
      </header>

      <main>
        <section className="relative isolate overflow-hidden bg-forest py-20 text-paper sm:py-28">
          <div className="absolute right-[-8rem] top-[-8rem] -z-10 h-[30rem] w-[30rem] rounded-full border border-marigold/30" />
          <div className="section-shell grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-24">
            <div><div className="mb-7 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-paper/50"><a href="/" className="transition hover:text-marigold">Home</a><ChevronRight size={13} /><span className="text-marigold">History</span></div><p className="eyebrow text-marigold">Our history</p><h1 className="max-w-3xl font-display text-5xl leading-[0.95] tracking-[-0.055em] sm:text-7xl">A calling shaped by <span className="text-marigold">years of service.</span></h1><p className="mt-7 max-w-2xl text-base leading-7 text-paper/70 sm:text-lg">Rock of Hope Mission grew from Molly&apos;s deep conviction that faithful leadership should become practical care for the most vulnerable.</p></div>
            <div className="relative mx-auto w-full max-w-md lg:ml-auto"><img src="/images/bk_img.png" alt="Women gathered together in a community setting" className="aspect-[4/5] w-full rounded-[2.5rem] object-cover opacity-90" /><div className="absolute -bottom-6 -left-5 rounded-2xl bg-marigold p-5 text-forest shadow-xl sm:-left-8"><Sprout size={21} /><p className="mt-3 font-display text-xl leading-tight">Leadership<br />that serves</p></div></div>
          </div>
        </section>

        <section className="bg-paper py-20 sm:py-28">
          <div className="section-shell grid gap-14 lg:grid-cols-[0.72fr_1.28fr] lg:gap-24">
            <aside className="h-fit rounded-[2rem] bg-mist p-7 lg:sticky lg:top-8 sm:p-9"><p className="text-xs font-bold uppercase tracking-[0.18em] text-clay">Founder profile</p><h2 className="mt-4 font-display text-4xl leading-none text-forest">Molly</h2><p className="mt-3 text-sm leading-6 text-ink/65">Executive Director & Co-founder</p><div className="mt-8 border-t border-forest/10 pt-6 text-sm leading-6 text-ink/70"><p>Rock of Hope Mission Uganda</p><p>Gulu District, Northern Uganda</p></div><div className="mt-8 rounded-2xl bg-forest p-5 text-paper"><HandHeart size={23} className="text-marigold" /><p className="mt-4 font-display text-2xl leading-tight">A life of experience turned toward hope.</p></div></aside>

            <div className="max-w-3xl"><p className="eyebrow">The beginning</p><h2 className="display-heading">From faithful service to a local mission.</h2><div className="mt-8 space-y-6 text-base leading-8 text-ink/72"><p>Driven by the passion and commitment to contribute to sustainable global development through promotion of Godly Leadership and Development Values, Molly has attained over 19 years of active professional service with faith-based humanitarian organizations in Uganda at various capacities. She has previously served as Accounts Assistant and a counselor with Action International Ministries Uganda for 2 years, then with World Vision International as Administrative Assistant for 5 years and recently with African Leadership and Reconciliation Ministries (ALARM) as Orphan Care Program Coordinator for over 10 years. All of these organizations are faith based which has enabled her to build her Christian leadership and work principles.</p><p>Having faithfully served with Christian ministries caring for the needs of the most vulnerable children and women especially orphaned children and those living with HIV/AIDS over the years, Molly felt convicted and founded Rock of Hope Mission Uganda (ROHM), a local faith-based Non-Governmental Organization operating in Gulu district for which she is the Executive Director and co-founder.</p><p>Molly holds a Master of Arts in Management (M.A Public Administration and Management), a Bachelor&apos;s Degree in Development Studies and a Post Graduate Diploma in public Administration. She also has wide experience in Leadership Development and Christian Ministry having attended trainings in the areas of Community Based Rural Development, Nutrition and Early Childhood Development, counseling, conflict resolution, mediation, and reconciliation. A highly flexible, practical, and proven team player, Molly is not only a trainer but also mentor and counselor.</p></div>

              <div className="mt-14 rounded-[2rem] bg-[#ead5c5] p-7 sm:p-9"><p className="eyebrow">Founder profile</p><h3 className="font-display text-3xl leading-tight text-forest">A prepared leader with a heart for service.</h3><p className="mt-5 text-base leading-7 text-ink/70">Her academic training, ministry experience, and practical formation continue to shape the way Rock of Hope Mission walks with vulnerable children, women, and youth.</p><div className="mt-7 grid gap-3 sm:grid-cols-3"><div className="rounded-xl bg-paper/70 p-4"><p className="font-display text-2xl text-clay">M.A.</p><p className="mt-1 text-xs font-bold uppercase tracking-[0.12em] text-ink/60">Management</p></div><div className="rounded-xl bg-paper/70 p-4"><p className="font-display text-2xl text-clay">BA</p><p className="mt-1 text-xs font-bold uppercase tracking-[0.12em] text-ink/60">Development Studies</p></div><div className="rounded-xl bg-paper/70 p-4"><p className="font-display text-2xl text-clay">PGD</p><p className="mt-1 text-xs font-bold uppercase tracking-[0.12em] text-ink/60">Public Administration</p></div></div></div>

              <div className="mt-14"><p className="eyebrow">Continuing formation</p><h3 className="font-display text-3xl leading-tight text-forest">Learning for the work ahead.</h3><p className="mt-5 text-base leading-7 text-ink/70">Molly has wide experience in Leadership Development and Christian Ministry, including training in Community Based Rural Development, Nutrition and Early Childhood Development, counseling, conflict resolution, mediation, and reconciliation.</p><a href="/who-we-are" className="button-primary mt-8">Read who we are <ArrowUpRight size={16} /></a></div>
            </div>
          </div>
        </section>

        <section className="bg-clay py-20 text-paper sm:py-24"><div className="section-shell grid gap-8 lg:grid-cols-[1fr_1.1fr] lg:items-center lg:gap-20"><div><p className="eyebrow text-marigold">The legacy continues</p><h2 className="display-heading">A history of service is now a future of possibility.</h2></div><div className="rounded-[2rem] bg-forest/25 p-7 sm:p-9"><Quote size={32} className="text-marigold" strokeWidth={1.5} /><p className="mt-5 font-display text-3xl leading-tight">“Leadership is not only what we know. It is what we make possible for others.”</p><a href="/#contact" className="mt-8 inline-flex items-center gap-2 text-sm font-bold text-paper transition hover:gap-3 hover:text-marigold">Connect with the mission <ArrowUpRight size={16} /></a></div></div></section>
      </main>

      <footer className="bg-forest py-10 text-paper"><div className="section-shell"><div className="flex flex-col gap-8 border-b border-paper/15 pb-8 lg:flex-row lg:items-end lg:justify-between"><div><a href="/" className="flex items-center gap-3"><span className="flex h-10 w-10 items-center justify-center rounded-xl bg-marigold text-forest"><HeartHandshake size={20} /></span><span className="font-display text-2xl">Rock of Hope Mission</span></a><p className="mt-4 max-w-sm text-sm leading-6 text-paper/60">For the love of humanity. Walking with vulnerable children, women, and young people in Gulu, Uganda.</p></div><div className="flex flex-wrap gap-x-6 gap-y-3 text-sm font-medium text-paper/65"><a href="/who-we-are" className="hover:text-marigold">Who we are</a><a href="/history" className="text-marigold">History</a><a href="/sponsorship" className="hover:text-marigold">Projects</a><a href="/#contact" className="hover:text-marigold">Contact</a><a href="/#donate" className="hover:text-marigold">Donate</a></div></div><div className="flex flex-col gap-3 pt-6 text-xs text-paper/40 sm:flex-row sm:items-center sm:justify-between"><span>© {new Date().getFullYear()} Rock of Hope Mission Uganda</span><span className="inline-flex items-center gap-2"><MapPin size={14} /> Gulu, Northern Uganda</span></div></div></footer>
    </div>
  )
}

function SponsorshipPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pageNavLinks = [
    { label: 'Home', href: '/' },
    { label: 'What we do', href: '/#programs' },
    { label: 'Contact', href: '/#contact' },
  ]

  return (
    <div className="overflow-hidden bg-paper text-ink">
      <div className="bg-marigold px-5 py-2 text-center text-[11px] font-bold uppercase tracking-[0.16em] text-forest sm:text-xs">For the love of humanity · Gulu, Northern Uganda</div>
      <header className="relative z-30 bg-forest text-paper">
        <div className="section-shell">
          <nav className="flex items-center justify-between border-b border-paper/20 py-5" aria-label="Main navigation">
            <a href="/" className="group flex items-center gap-3" aria-label="Rock of Hope Mission home"><span className="flex h-11 w-11 items-center justify-center rounded-[1.15rem] bg-marigold text-forest shadow-lg transition group-hover:rotate-3"><HeartHandshake size={22} strokeWidth={2.2} /></span><span className="leading-none"><span className="block font-display text-xl tracking-[-0.04em]">Rock of Hope</span><span className="mt-1 block text-[9px] font-bold uppercase tracking-[0.22em] text-paper/60">Mission Uganda</span></span></a>
            <div className="hidden items-center gap-8 lg:flex"><WhoWeAreMenu /><ProjectsMenu />{pageNavLinks.map((link) => <a key={link.href} href={link.href} className="text-sm font-medium text-paper/80 transition hover:text-marigold">{link.label}</a>)}<a href="/#donate" className="button-primary !px-4 !py-2.5">Donate <ArrowUpRight size={15} /></a></div>
            <button className="rounded-full border border-paper/30 p-2 lg:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'} aria-expanded={isMenuOpen}>{isMenuOpen ? <X size={21} /> : <Menu size={21} />}</button>
          </nav>
          {isMenuOpen && <div className="mt-3 rounded-3xl border border-paper/20 bg-forest/95 p-5 shadow-soft lg:hidden"><div className="flex flex-col gap-4"><WhoWeAreMenu mobile /><ProjectsMenu mobile />{pageNavLinks.map((link) => <a key={link.href} href={link.href} onClick={() => setIsMenuOpen(false)} className="text-sm font-medium text-paper/80 hover:text-marigold">{link.label}</a>)}<a href="/#donate" onClick={() => setIsMenuOpen(false)} className="button-primary mt-1 w-full">Donate <ArrowUpRight size={15} /></a></div></div>}
        </div>
      </header>

      <main>
        <section className="relative isolate overflow-hidden bg-forest py-20 text-paper sm:py-28"><div className="absolute right-[-8rem] top-[-8rem] -z-10 h-[30rem] w-[30rem] rounded-full border border-marigold/30" /><div className="section-shell grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-24"><div><div className="mb-7 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-paper/50"><a href="/" className="transition hover:text-marigold">Home</a><ChevronRight size={13} /><span className="text-marigold">Projects</span><ChevronRight size={13} /><span className="text-marigold">Sponsorship</span></div><p className="eyebrow text-marigold">Child sponsorship</p><h1 className="max-w-3xl font-display text-5xl leading-[0.95] tracking-[-0.055em] sm:text-7xl">Help a child grow into their <span className="text-marigold">full potential.</span></h1><p className="mt-7 max-w-2xl text-base leading-7 text-paper/70 sm:text-lg">We primarily work with the most vulnerable children, offering practical support, encouragement, and a relationship that reminds each child they are seen and valued.</p></div><div className="relative mx-auto w-full max-w-md lg:ml-auto"><img src="/images/classroom.jpg" alt="Children learning together in a classroom" className="aspect-[4/3] w-full rounded-[2.5rem] object-cover opacity-90" /><div className="absolute -bottom-6 -left-5 rounded-2xl bg-marigold p-5 text-forest shadow-xl sm:-left-8"><GraduationCap size={21} /><p className="mt-3 font-display text-xl leading-tight">Education<br />changes everything</p></div></div></div></section>

        <section className="bg-paper py-20 sm:py-28"><div className="section-shell grid gap-14 lg:grid-cols-[0.72fr_1.28fr] lg:gap-24"><aside className="h-fit rounded-[2rem] bg-mist p-7 lg:sticky lg:top-8 sm:p-9"><p className="text-xs font-bold uppercase tracking-[0.18em] text-clay">Sponsorship</p><div className="mt-6 space-y-4 text-sm font-bold text-forest"><a href="#programme" className="flex items-center justify-between border-b border-forest/10 pb-4 transition hover:text-leaf">The programme <ArrowDownRight size={16} /></a><a href="#give" className="flex items-center justify-between border-b border-forest/10 pb-4 transition hover:text-leaf">Ways to give <ArrowDownRight size={16} /></a><a href="#children" className="flex items-center justify-between transition hover:text-leaf">Meet the children <ArrowDownRight size={16} /></a></div><div className="mt-10 rounded-2xl bg-forest p-5 text-paper"><HeartHandshake size={23} className="text-marigold" /><p className="mt-4 font-display text-2xl leading-tight">A personal way to show God&apos;s love to a child in need.</p></div></aside>

          <div id="programme" className="scroll-mt-8"><p className="eyebrow">The programme</p><h2 className="display-heading max-w-3xl">Care that meets a child where they are.</h2><div className="mt-8 space-y-6 text-base leading-8 text-ink/72"><p>Our sponsorship programme focuses on taking care of children through educational assistance, including scholastic materials, school shoes, school bags, school uniforms, post-secondary courses, key life skills training, mentoring, and vocational programmes.</p><p>Children can also receive ongoing Christian training through a local church, access to nutritious food and supplements to protect against malnutrition, health and medical care, recreational activities, and support to develop self-confidence and social skills.</p><p>We work to protect children against crime, violence, and danger, as well as provide access to special services such as surgeries and disaster relief when needed. Our sponsorship programme is case by case, with funding spent based on the needs of each child.</p><p>For every child, we try to create a relationship between the child and the sponsor by encouraging them to write letters to each other. These letters are a great encouragement to the child and an incredible way for sponsors to share the love of Christ.</p></div>

            <div id="give" className="mt-14 scroll-mt-8 rounded-[2rem] bg-[#F3E0D4] p-7 sm:p-9"><p className="eyebrow">More ways to give</p><h3 className="font-display text-3xl leading-tight text-forest">Break the cycle of poverty through education.</h3><p className="mt-5 max-w-2xl text-base leading-7 text-ink/70">Give where most needed — one time, monthly, yearly, or any amount you feel able to share. A gift of $50, $100, $150, $200, $250, $500, or another amount can help kids and families lift themselves out of poverty.</p><div className="mt-7 grid gap-3 sm:grid-cols-3"><div className="rounded-xl bg-paper/70 p-4"><p className="font-bold text-forest">Sponsorship</p><p className="mt-2 text-sm leading-5 text-ink/65">A personal way to show God&apos;s love to a child in need.</p></div><div className="rounded-xl bg-paper/70 p-4"><p className="font-bold text-forest">Gift catalogue</p><p className="mt-2 text-sm leading-5 text-ink/65">Browse unique gifts and donate in someone&apos;s honour.</p></div><div className="rounded-xl bg-paper/70 p-4"><p className="font-bold text-forest">Gift that multiplies</p><p className="mt-2 text-sm leading-5 text-ink/65">Power up your impact through grants and generous corporations.</p></div></div><a href="/#contact" className="button-primary mt-8">Ask about giving <ArrowUpRight size={16} /></a></div>
          </div></div></section>

        <section id="children" className="paper-grid scroll-mt-8 bg-mist py-20 sm:py-28"><div className="section-shell"><div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end"><div><p className="eyebrow">Meet the children</p><h2 className="display-heading">Every story deserves a chance.</h2><p className="mt-5 max-w-2xl text-base leading-7 text-ink/70">This flexible 15-profile layout is ready for the approved child photographs and stories. Replace any placeholder image or copy in the `childProfiles` data without changing the design.</p></div><span className="rounded-full bg-marigold px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-forest">15 profiles · growing with care</span></div>
          {childProfiles.map((child, index) => (
  <article
    key={child.name}
    className="mb-10 grid overflow-hidden rounded-[2rem] border-2 border-forest/15 bg-paper shadow-[0_20px_55px_rgba(23,53,47,0.12)] lg:grid-cols-[0.88fr_1.12fr]"
  >
    {/* Child image */}
    <div className="relative h-[360px] overflow-hidden bg-forest sm:h-[420px] lg:h-[460px]">
      {child.image ? (
        <img
          src={child.image}
          alt={child.imageAlt}
          className="absolute inset-0 h-full w-full object-cover"
          style={{
            objectPosition: '50% 18%',
          }}
        />
      ) : (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-[radial-gradient(circle_at_30%_20%,#2b725e,transparent_45%),linear-gradient(135deg,#17352f,#285246)] p-8 text-center text-paper">
          <div className="flex h-16 w-16 items-center justify-center rounded-full border border-marigold/60 text-marigold">
            <HeartHandshake size={30} />
          </div>

          <p className="mt-5 font-display text-2xl">
            Portrait placeholder
          </p>

          <p className="mt-2 max-w-[220px] text-sm leading-5 text-paper/60">
            Replace with the approved photo for {child.name}.
          </p>
        </div>
      )}

    </div>

    {/* Child information */}
    <div className="flex flex-col justify-center border-t-2 border-forest/10 p-7 sm:p-10 lg:border-l-2 lg:border-t-0">
      <p className="text-xs font-bold uppercase tracking-[0.18em] text-clay">
        Child sponsorship profile
      </p>

      <h3 className="mt-3 font-display text-4xl leading-none text-forest">
        {child.name}
      </h3>

      <p className="mt-2 text-sm font-bold uppercase tracking-[0.14em] text-leaf">
        {child.age}
      </p>

      <p className="mt-7 text-lg leading-7 text-ink/80">
        {child.summary}
      </p>

      <p className="mt-5 text-sm leading-6 text-ink/65">
        {child.details}
      </p>

      <p className="mt-5 border-l-2 border-marigold pl-4 text-sm font-medium leading-6 text-ink/75">
        {child.dream}
      </p>

      {child.placeholder ? (
        <p className="mt-7 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.14em] text-clay">
          <span className="h-2 w-2 rounded-full bg-marigold" />
          Waiting for approved profile content
        </p>
      ) : (
        <a href="/#contact" className="button-ghost mt-7">
          Ask about sponsoring {child.name}
          <ArrowUpRight size={15} />
        </a>
      )}
    </div>
  </article>
))}


        </div></section>
      </main>

      <footer className="bg-forest py-10 text-paper"><div className="section-shell"><div className="flex flex-col gap-8 border-b border-paper/15 pb-8 lg:flex-row lg:items-end lg:justify-between"><div><a href="/" className="flex items-center gap-3"><span className="flex h-10 w-10 items-center justify-center rounded-xl bg-marigold text-forest"><HeartHandshake size={20} /></span><span className="font-display text-2xl">Rock of Hope Mission</span></a><p className="mt-4 max-w-sm text-sm leading-6 text-paper/60">For the love of humanity. Walking with vulnerable children, women, and young people in Gulu, Uganda.</p></div><div className="flex flex-wrap gap-x-6 gap-y-3 text-sm font-medium text-paper/65"><a href="/who-we-are" className="hover:text-marigold">Who we are</a><a href="/history" className="hover:text-marigold">History</a><a href="/sponsorship" className="text-marigold">Projects: Sponsorship</a><a href="/#contact" className="hover:text-marigold">Contact</a></div></div><div className="flex flex-col gap-3 pt-6 text-xs text-paper/40 sm:flex-row sm:items-center sm:justify-between"><span>© {new Date().getFullYear()} Rock of Hope Mission Uganda</span><span className="inline-flex items-center gap-2"><MapPin size={14} /> Gulu, Northern Uganda</span></div></div></footer>
    </div>
  )
}

function ProjectHeader({ current, title, accent, description, image, imageAlt }: { current: string; title: ReactNode; accent: string; description: string; image: string; imageAlt: string }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pageNavLinks = [{ label: 'Home', href: '/' }, { label: 'What we do', href: '/#programs' }, { label: 'Contact', href: '/#contact' }]
  return <><div className="bg-marigold px-5 py-2 text-center text-[11px] font-bold uppercase tracking-[0.16em] text-forest sm:text-xs">For the love of humanity · Gulu, Northern Uganda</div><header className="relative z-30 bg-forest text-paper"><div className="section-shell"><nav className="flex items-center justify-between border-b border-paper/20 py-5" aria-label="Main navigation"><a href="/" className="group flex items-center gap-3"><span className="flex h-11 w-11 items-center justify-center rounded-[1.15rem] bg-marigold text-forest shadow-lg transition group-hover:rotate-3"><HeartHandshake size={22} strokeWidth={2.2} /></span><span className="leading-none"><span className="block font-display text-xl tracking-[-0.04em]">Rock of Hope</span><span className="mt-1 block text-[9px] font-bold uppercase tracking-[0.22em] text-paper/60">Mission Uganda</span></span></a><div className="hidden items-center gap-8 lg:flex"><WhoWeAreMenu /><ProjectsMenu />{pageNavLinks.map((link) => <a key={link.href} href={link.href} className="text-sm font-medium text-paper/80 transition hover:text-marigold">{link.label}</a>)}<a href="/#donate" className="button-primary !px-4 !py-2.5">Donate <ArrowUpRight size={15} /></a></div><button className="rounded-full border border-paper/30 p-2 lg:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle navigation menu" aria-expanded={isMenuOpen}>{isMenuOpen ? <X size={21} /> : <Menu size={21} />}</button></nav>{isMenuOpen && <div className="mt-3 rounded-3xl border border-paper/20 bg-forest/95 p-5 shadow-soft lg:hidden"><div className="flex flex-col gap-4"><WhoWeAreMenu mobile /><ProjectsMenu mobile />{pageNavLinks.map((link) => <a key={link.href} href={link.href} className="text-sm font-medium text-paper/80 hover:text-marigold">{link.label}</a>)}</div></div>}</div></header><section className="relative isolate overflow-hidden bg-forest py-20 text-paper sm:py-28"><div className="absolute right-[-8rem] top-[-8rem] -z-10 h-[30rem] w-[30rem] rounded-full border border-marigold/30" /><div className="section-shell grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-24"><div><div className="mb-7 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-paper/50"><a href="/" className="transition hover:text-marigold">Home</a><ChevronRight size={13} /><span className="text-marigold">Projects</span><ChevronRight size={13} /><span className="text-marigold">{current}</span></div><p className="eyebrow text-marigold">{current}</p><h1 className="max-w-3xl font-display text-5xl leading-[0.95] tracking-[-0.055em] sm:text-7xl">{title}</h1><p className="mt-7 max-w-2xl text-base leading-7 text-paper/70 sm:text-lg">{description}</p></div><div className="relative mx-auto w-full max-w-md lg:ml-auto"><img src={image} alt={imageAlt} className="aspect-[4/3] w-full rounded-[2.5rem] object-cover opacity-90" /><div className="absolute -bottom-6 -left-5 rounded-2xl bg-marigold p-5 text-forest shadow-xl sm:-left-8"><Sprout size={21} /><p className="mt-3 font-display text-xl leading-tight">{accent}</p></div></div></div></section></>
}

function ProjectFooter() {
  return <footer className="bg-forest py-10 text-paper"><div className="section-shell"><div className="flex flex-col gap-8 border-b border-paper/15 pb-8 lg:flex-row lg:items-end lg:justify-between"><div><a href="/" className="flex items-center gap-3"><span className="flex h-10 w-10 items-center justify-center rounded-xl bg-marigold text-forest"><HeartHandshake size={20} /></span><span className="font-display text-2xl">Rock of Hope Mission</span></a><p className="mt-4 max-w-sm text-sm leading-6 text-paper/60">For the love of humanity. Walking with vulnerable children, women, and young people in Gulu, Uganda.</p></div><div className="flex flex-wrap gap-x-6 gap-y-3 text-sm font-medium text-paper/65"><a href="/sponsorship" className="hover:text-marigold">Sponsorship</a><a href="/economic-empowerment" className="hover:text-marigold">Empowerment</a><a href="/child-protection" className="hover:text-marigold">Protection</a><a href="/#contact" className="hover:text-marigold">Contact</a></div></div><div className="flex flex-col gap-3 pt-6 text-xs text-paper/40 sm:flex-row sm:items-center sm:justify-between"><span>© {new Date().getFullYear()} Rock of Hope Mission Uganda</span><span className="inline-flex items-center gap-2"><MapPin size={14} /> Gulu, Northern Uganda</span></div></div></footer>
}


function EconomicEmpowermentPage() {
  const gallery = [
    {
      image: "/images/empowerment/Adong Rose.png",
      imageAlt: "Woman participating in an economic empowerment activity",
      name: "Adong Rose",
    },
    {
      image: "/images/empowerment/Akello Everlyn.png",
      imageAlt: "Woman working in her community business",
      name: "Akello Everlyn",
    },
    {
      image: "/images/empowerment/Akulu Everlyn.png",
      imageAlt: "Women working together in a community setting",
      name: "Akulu Everlyn",
    },
    {
      image: "/images/empowerment/Lamara Gladys.png",
      imageAlt: "Woman participating in a livelihood activity",
      name: "Lamara Gladys",
    },
  ];

  return (
    <div className="overflow-hidden bg-paper text-ink">
      <ProjectHeader
        current="Economic empowerment"
        title={
          <>
            When women have room to{" "}
            <span className="text-marigold">thrive.</span>
          </>
        }
        accent="Skills that strengthen families"
        description="We walk with vulnerable women through counselling, business training, and microloans that help them build sustainable livelihoods and become responsible mothers."
        image="/images/women-empowerment.jpg"
        imageAlt="Women gathered together in a community setting"
      />

      <main>
        {/* OUR APPROACH */}
        <section className="bg-paper py-20 sm:py-28">
          <div className="section-shell grid gap-14 lg:grid-cols-[0.72fr_1.28fr] lg:gap-24">
            <aside className="h-fit rounded-[2rem] bg-mist p-7 lg:sticky lg:top-8 sm:p-9">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-clay">
                Our approach
              </p>

              <div className="mt-6 space-y-4 text-sm font-bold text-forest">
                <a
                  href="#story"
                  className="flex items-center justify-between border-b border-forest/10 pb-4 hover:text-leaf"
                >
                  The work <ArrowDownRight size={16} />
                </a>

                <a
                  href="#gallery"
                  className="flex items-center justify-between border-b border-forest/10 pb-4 hover:text-leaf"
                >
                  Women at work <ArrowDownRight size={16} />
                </a>

                <a
                  href="#partner"
                  className="flex items-center justify-between hover:text-leaf"
                >
                  Partner with us <ArrowDownRight size={16} />
                </a>
              </div>

              <div className="mt-10 rounded-2xl bg-forest p-5 text-paper">
                <Sprout size={23} className="text-marigold" />
                <p className="mt-4 font-display text-2xl leading-tight">
                  A stronger livelihood creates more room for hope.
                </p>
              </div>
            </aside>

            <div id="story" className="scroll-mt-8">
              <p className="eyebrow">Women’s livelihoods</p>

              <h2 className="display-heading max-w-3xl">
                Practical skills. Patient support. Sustainable change.
              </h2>

              <div className="mt-8 space-y-6 text-base leading-8 text-ink/72">
                <p>
                  To vulnerable women, besides counselling them through
                  their troubles, we provide economic empowerment
                  through trainings on business and go ahead to
                  provide microloans to do business.
                </p>

                <p>
                  We believe women have a key role to play in the
                  upbringing of children and the wellbeing of families.
                  When women have access to relevant skills,
                  encouragement, and a little capital, they can
                  create a sustainable life for themselves as women
                  and mothers.
                </p>
              </div>

              <div className="mt-12 grid gap-4 sm:grid-cols-3">
                <div className="rounded-2xl bg-moss p-6">
                  <p className="font-display text-3xl text-forest">01</p>
                  <p className="mt-3 font-bold text-forest">Counselling</p>
                  <p className="mt-2 text-sm leading-6 text-ink/65">
                    Space to be heard, supported, and strengthened.
                  </p>
                </div>

                <div className="rounded-2xl bg-[#F3E0D4] p-6">
                  <p className="font-display text-3xl text-clay">02</p>
                  <p className="mt-3 font-bold text-forest">
                    Business training
                  </p>
                  <p className="mt-2 text-sm leading-6 text-ink/65">
                    Relevant skills for confident, practical enterprise.
                  </p>
                </div>

                <div className="rounded-2xl bg-[#F2D8D0] p-6">
                  <p className="font-display text-3xl text-clay">03</p>
                  <p className="mt-3 font-bold text-forest">Microloans</p>
                  <p className="mt-2 text-sm leading-6 text-ink/65">
                    Small opportunities that can grow into lasting livelihoods.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* WOMEN AT WORK — GALLERY */}
        <section
          id="gallery"
          className="paper-grid scroll-mt-8 bg-mist py-20 sm:py-28"
        >
          <div className="section-shell">
            <div className="flex flex-col justify-between gap-5 lg:flex-row lg:items-end">
              <div>
                <p className="eyebrow">Women at work</p>
                <h2 className="display-heading">
                  Dignity looks like possibility in motion.
                </h2>
              </div>

              <p className="max-w-md text-sm leading-6 text-ink/65">
                To the vulnerable women, besides counselling then we
                economically empower them through trainings on
                business and go ahead and provide to them
                microloans to do business.
              </p>
            </div>

            {/* ONE GRID ONLY — FOUR EQUAL IMAGE CARDS */}
            <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {gallery.map((item, index) => (
                <div
                  key={item.image}
                  className="relative aspect-[4/5] w-full min-w-0 overflow-hidden rounded-[1.75rem] bg-forest"
                >
                  <img
                    src={item.image}
                    alt={item.imageAlt}
                    className="block h-full w-full object-cover"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-forest/45 via-transparent to-transparent" />

                  <span className="absolute left-4 top-4 rounded-full bg-marigold px-3 py-1 text-[10px] font-bold uppercase tracking-[0.15em] text-forest">
                   {item.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PARTNER WITH THE WORK */}
        <section
          id="partner"
          className="scroll-mt-8 bg-marigold py-20 sm:py-24"
        >
          <div className="section-shell grid gap-8 lg:grid-cols-[1fr_1.1fr] lg:items-center lg:gap-20">
            <div>
              <p className="eyebrow text-forest">
                Partner with the work
              </p>

              <h2 className="display-heading text-forest">
                Help create a sustainable life for a woman
                and her family.
              </h2>
            </div>

            <div className="rounded-[2rem] bg-forest p-7 text-paper sm:p-9">
              <p className="text-base leading-7 text-paper/75">
                Your support can help provide counselling,
                business training, and microloans that make
                a practical difference in a mother’s life.
              </p>

              <a href="/#contact" className="button-primary mt-7">
                Start a conversation
                <ArrowUpRight size={16} />
              </a>
            </div>
          </div>
        </section>
      </main>

      <ProjectFooter />
    </div>
  );
}


function ChildProtectionPage() {
  const convictions = [
    ['No violence', 'No violence against children is justifiable.'],
    ['Prevention', 'All violence against children is preventable.'],
    ['Everyone’s job', 'It is everyone’s job to protect children.'],
  ]
  const commitments = ['Protect children from all forms of abuse and exploitation.', 'Intervene quickly and seek restoration and healing for children affected by abuse.', 'Commit to prevention of abuse against children.', 'Advocate for effective parenting and work toward what is best for each child.', 'Treat every child equally regardless of race, religion, or other difference.', 'Defend every child’s right to express their opinion, and their right to life, survival, and healthy development.']
  return <div className="overflow-hidden bg-paper text-ink"><ProjectHeader current="Child protection" title={<>Protection is not extra. It is the <span className="text-marigold">beginning.</span></>} accent="Every child deserves safety" description="We believe the protection of children is central to God’s heart for them. Our approach begins with avoiding abuse whenever possible and building a culture where every child is safe, heard, and valued." image="/images/hero-children.jpg" imageAlt="Children gathered together in their community" /><main><section className="bg-paper py-20 sm:py-28"><div className="section-shell grid gap-14 lg:grid-cols-[0.72fr_1.28fr] lg:gap-24"><aside className="h-fit rounded-[2rem] bg-mist p-7 lg:sticky lg:top-8 sm:p-9"><p className="text-xs font-bold uppercase tracking-[0.18em] text-clay">Child protection</p><div className="mt-6 space-y-4 text-sm font-bold text-forest"><a href="#convictions" className="flex items-center justify-between border-b border-forest/10 pb-4 hover:text-leaf">Our convictions <ArrowDownRight size={16} /></a><a href="#commitments" className="flex items-center justify-between border-b border-forest/10 pb-4 hover:text-leaf">Our commitments <ArrowDownRight size={16} /></a><a href="#action" className="flex items-center justify-between hover:text-leaf">Our shared responsibility <ArrowDownRight size={16} /></a></div><div className="mt-10 rounded-2xl bg-forest p-5 text-paper"><ShieldCheck size={23} className="text-marigold" /><p className="mt-4 font-display text-2xl leading-tight">Every child has the right to grow in safety.</p></div></aside><div id="convictions" className="scroll-mt-8"><p className="eyebrow">Our convictions</p><h2 className="display-heading max-w-3xl">A culture of protection, not just a promise.</h2><p className="mt-7 max-w-3xl text-base leading-8 text-ink/72">Another activity we do is child protection. We believe the protection of children is central to God&apos;s heart for them. Our approach to child protection begins with avoiding abuse whenever possible.</p><div className="mt-10 grid gap-4 md:grid-cols-3">{convictions.map(([title, text], index) => <div key={title} className={`rounded-[2rem] p-6 sm:p-7 ${index === 0 ? 'bg-[#F2D8D0]' : index === 1 ? 'bg-[#F3E0D4]' : 'bg-moss'}`}><span className="font-display text-4xl text-clay">0{index + 1}</span><h3 className="mt-8 font-display text-2xl leading-tight text-forest">{title}</h3><p className="mt-3 text-sm leading-6 text-ink/70">{text}</p></div>)}</div></div></div></section><section id="commitments" className="paper-grid scroll-mt-8 bg-mist py-20 sm:py-28"><div className="section-shell grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start lg:gap-20"><div><p className="eyebrow">Our commitments</p><h2 className="display-heading">We choose action when a child needs protection.</h2><p className="mt-6 text-base leading-7 text-ink/70">Protection is woven into the way we work with children, families, caregivers, churches, and communities.</p></div><div className="space-y-3">{commitments.map((commitment, index) => <div key={commitment} className="flex gap-4 rounded-2xl border border-forest/10 bg-paper p-5 sm:p-6"><span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-marigold font-display text-lg text-forest">{String(index + 1).padStart(2, '0')}</span><p className="text-sm leading-6 text-ink/75 sm:text-base">{commitment}</p></div>)}</div></div></section><section id="action" className="scroll-mt-8 bg-forest py-20 text-paper sm:py-24"><div className="section-shell grid gap-8 lg:grid-cols-[1fr_1.1fr] lg:items-center lg:gap-20"><div><p className="eyebrow text-marigold">Everyone’s responsibility</p><h2 className="display-heading">When communities protect children, children can become who they were made to be.</h2></div><div className="rounded-[2rem] border border-paper/15 bg-paper/5 p-7 sm:p-9"><ShieldCheck size={31} className="text-marigold" /><p className="mt-5 text-base leading-7 text-paper/75">We work toward effective parenting, early action, equal treatment, and space for every child to express their opinion. If you want to support this work, we would love to hear from you.</p><a href="/#contact" className="button-primary mt-7">Connect with us <ArrowUpRight size={16} /></a></div></div></section></main><ProjectFooter /></div>
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/who-we-are" element={<WhoWeArePage />} />
        <Route path="/history" element={<HistoryPage />} />
        <Route path="/sponsorship" element={<SponsorshipPage />} />
        <Route path="/economic-empowerment" element={<EconomicEmpowermentPage />} />
        <Route path="/child-protection" element={<ChildProtectionPage />} />
        <Route path="*" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
