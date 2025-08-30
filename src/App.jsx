import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  // Handle scroll for active navigation
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'services', 'portfolio', 'contact']
      const current = sections.find(section => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })
      if (current) setActiveSection(current)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' })
    setIsMenuOpen(false)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-sm shadow z-40">
        <div className="max-w-6xl mx-auto px-4 sm:px-8">
          <div className="flex justify-between items-center py-3">
            <div className="text-2xl font-extrabold tracking-tight text-gray-900 select-none">
              พอร์ต<span className="text-blue-600">โฟลิโอ.</span>
            </div>
            {/* Desktop Menu */}
            <div className="hidden md:flex gap-2 bg-gray-100 rounded-xl px-2 py-1 shadow-inner">
              {[
                { id: 'home', label: 'หน้าแรก' },
                { id: 'about', label: 'เกี่ยวกับฉัน' },
                { id: 'services', label: 'บริการ' },
                { id: 'portfolio', label: 'ผลงาน' },
                { id: 'contact', label: 'ติดต่อ' },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`px-4 py-2 rounded-lg font-medium transition-colors duration-200 ${
                    activeSection === item.id 
                      ? 'bg-blue-600 text-white shadow font-semibold' 
                      : 'text-gray-700 hover:bg-blue-50 hover:text-blue-600'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
            {/* Mobile Menu Button */}
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Open menu"
            >
              <div className="w-7 h-7 flex flex-col justify-around">
                <span className={`w-full h-0.5 bg-gray-700 transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                <span className={`w-full h-0.5 bg-gray-700 transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
                <span className={`w-full h-0.5 bg-gray-700 transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
              </div>
            </button>
          </div>
          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden pb-4 flex flex-col gap-1 bg-white rounded-xl shadow-inner mt-2">
              {[
                { id: 'home', label: 'หน้าแรก' },
                { id: 'about', label: 'เกี่ยวกับฉัน' },
                { id: 'services', label: 'บริการ' },
                { id: 'portfolio', label: 'ผลงาน' },
                { id: 'contact', label: 'ติดต่อ' },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`px-4 py-2 text-left rounded-lg font-medium transition-colors duration-200 ${
                    activeSection === item.id 
                      ? 'bg-blue-600 text-white shadow font-semibold' 
                      : 'text-gray-700 hover:bg-blue-50 hover:text-blue-600'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 pt-24 pb-12">
        <div className="w-full max-w-3xl mx-auto px-4 text-center rounded-3xl shadow-xl bg-white/60 backdrop-blur-md py-16">
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-6 leading-tight">
              สวัสดีครับ ผม<span className="text-blue-600">[ชื่อของคุณ]</span>
            </h1>
            <p className="text-lg md:text-2xl text-gray-700 mb-6 max-w-2xl mx-auto">
              ฟรีแลนซ์สายสร้างสรรค์ & ผู้เชี่ยวชาญดิจิทัล
            </p>
            <p className="text-base md:text-lg text-gray-500 mb-10 max-w-xl mx-auto">
              ผมช่วยให้ธุรกิจเติบโตด้วยเว็บไซต์ที่สวยงาม พัฒนาอย่างมืออาชีพ และกลยุทธ์ดิจิทัลที่เห็นผลจริง
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => scrollToSection('portfolio')}
                className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200 font-semibold shadow"
              >
                ดูผลงานของผม
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-600 hover:text-white transition-colors duration-200 font-semibold shadow"
              >
                ติดต่อพูดคุย
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">เกี่ยวกับฉัน</h2>
            <p className="text-xl text-gray-600">หลงใหลในการสร้างประสบการณ์ดิจิทัลที่ดี</p>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-6">
                สร้างสรรค์โซลูชันดิจิทัลตั้งแต่ปี 2020
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                ด้วยประสบการณ์มากกว่า 4 ปีในสายงานพัฒนาเว็บไซต์และออกแบบดิจิทัล<br/>
                ผมเชี่ยวชาญในการสร้างเว็บไซต์ที่สวยงาม ใช้งานได้จริง และช่วยให้ธุรกิจประสบความสำเร็จบนโลกออนไลน์<br/>
                ผสมผสานดีไซน์สร้างสรรค์กับเทคโนโลยีทันสมัยเพื่อผลลัพธ์ที่ดีที่สุด
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Frontend</h4>
                  <p className="text-gray-600 text-sm">React, Vue, HTML/CSS, JavaScript</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Backend</h4>
                  <p className="text-gray-600 text-sm">Node.js, Python, PHP, ฐานข้อมูล</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">ออกแบบ</h4>
                  <p className="text-gray-600 text-sm">Figma, Adobe Suite, UI/UX</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">เครื่องมือ</h4>
                  <p className="text-gray-600 text-sm">Git, Docker, AWS, Analytics</p>
                </div>
              </div>
            </div>
            <div className="bg-gray-100 rounded-lg h-96 flex items-center justify-center">
              <div className="text-center">
                <div className="w-32 h-32 bg-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white text-4xl font-bold">YN</span>
                </div>
                <p className="text-gray-600">รูปถ่ายโปรไฟล์ของคุณ</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">บริการของฉัน</h2>
            <p className="text-xl text-gray-600">สิ่งที่ฉันสามารถช่วยคุณได้</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
              <div className="w-16 h-16 bg-blue-600 rounded-lg flex items-center justify-center mb-6">
                <span className="text-white text-2xl">🎨</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">ออกแบบเว็บไซต์</h3>
              <p className="text-gray-600 mb-6">
                ออกแบบเว็บไซต์ที่สวยงามและตอบโจทย์แบรนด์ของคุณ พร้อมรองรับทุกอุปกรณ์
              </p>
              <ul className="text-sm text-gray-500 space-y-2">
                <li>• ออกแบบ UI/UX</li>
                <li>• รองรับทุกหน้าจอ (Responsive)</li>
                <li>• สร้างเอกลักษณ์แบรนด์</li>
                <li>• ปรับประสบการณ์ผู้ใช้ให้ดีที่สุด</li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
              <div className="w-16 h-16 bg-blue-600 rounded-lg flex items-center justify-center mb-6">
                <span className="text-white text-2xl">💻</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">พัฒนาเว็บไซต์</h3>
              <p className="text-gray-600 mb-6">
                พัฒนาเว็บไซต์ที่รวดเร็ว ปลอดภัย และขยายต่อได้ ด้วยเทคโนโลยีสมัยใหม่
              </p>
              <ul className="text-sm text-gray-500 space-y-2">
                <li>• พัฒนา Frontend</li>
                <li>• พัฒนา Backend</li>
                <li>• ออกแบบฐานข้อมูล</li>
                <li>• เชื่อมต่อ API</li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
              <div className="w-16 h-16 bg-blue-600 rounded-lg flex items-center justify-center mb-6">
                <span className="text-white text-2xl">📱</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">กลยุทธ์ดิจิทัล</h3>
              <p className="text-gray-600 mb-6">
                วางแผนและพัฒนากลยุทธ์ดิจิทัลเพื่อเพิ่มโอกาสและขยายธุรกิจของคุณบนโลกออนไลน์
              </p>
              <ul className="text-sm text-gray-500 space-y-2">
                <li>• ปรับแต่ง SEO</li>
                <li>• เพิ่มประสิทธิภาพเว็บไซต์</li>
                <li>• ติดตั้งระบบวิเคราะห์ข้อมูล</li>
                <li>• ดูแลและให้คำปรึกษาต่อเนื่อง</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Portfolio</h2>
            <p className="text-xl text-gray-600">Some of my recent work</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div key={item} className="group cursor-pointer">
                <div className="bg-gray-200 rounded-lg overflow-hidden mb-4 aspect-video group-hover:shadow-lg transition-shadow duration-200">
                  <div className="w-full h-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center">
                    <span className="text-white text-2xl font-bold">Project {item}</span>
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Project Title {item}</h3>
                <p className="text-gray-600 text-sm mb-3">Web Development • Design</p>
                <p className="text-gray-500 text-sm">
                  Brief description of the project and technologies used to create this amazing solution.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">ติดต่อพูดคุยกับผม</h2>
            <p className="text-xl text-gray-300">พร้อมเริ่มโปรเจกต์ใหม่ของคุณหรือยัง?</p>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-6">ข้อมูลติดต่อ</h3>
              <p className="text-gray-300 mb-8 leading-relaxed">
                ผมยินดีรับโอกาสใหม่ๆ และโปรเจกต์ที่น่าสนใจ ไม่ว่าคุณจะต้องการเว็บไซต์ใหม่ ปรับปรุงเว็บไซต์เดิม หรือมีคำถามเกี่ยวกับงานดิจิทัล สามารถติดต่อผมได้เลยครับ
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <span className="text-2xl mr-4">📧</span>
                  <span>your.email@example.com</span>
                </div>
                <div className="flex items-center">
                  <span className="text-2xl mr-4">📱</span>
                  <span>+66 xx xxx xxxx</span>
                </div>
                <div className="flex items-center">
                  <span className="text-2xl mr-4">📍</span>
                  <span>ขอนแก่น ประเทศไทย</span>
                </div>
              </div>
              <div className="flex space-x-4 mt-8">
                <a href="#" className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors duration-200">
                  <span className="text-sm font-bold">Li</span>
                </a>
                <a href="#" className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors duration-200">
                  <span className="text-sm font-bold">Gh</span>
                </a>
                <a href="#" className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors duration-200">
                  <span className="text-sm font-bold">Tw</span>
                </a>
              </div>
            </div>
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">ชื่อ</label>
                <input 
                  type="text" 
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-500 transition-colors duration-200"
                  placeholder="กรอกชื่อของคุณ"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">อีเมล</label>
                <input 
                  type="email" 
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-500 transition-colors duration-200"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">ข้อความ</label>
                <textarea 
                  rows="5"
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-500 transition-colors duration-200"
                  placeholder="บอกเล่าเกี่ยวกับโปรเจกต์หรือสิ่งที่คุณต้องการ..."
                ></textarea>
              </div>
              <button 
                type="submit"
                className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200 font-semibold"
              >
                ส่งข้อความ
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-gray-400 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p>&copy; 2025 Your Name. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
