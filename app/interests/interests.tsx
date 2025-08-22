import RollingGallery from '@/components/RollingGallery';

export default function Interests() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-100 to-orange-100">
      {/* Rolling Gallery */}
      <RollingGallery autoplay={true} pauseOnHover={true} />
      <div className="flex flex-col items-center justify-center">
            <h1 className="text-5xl font-bold text-center text-gray-800">Education & Experiences </h1>
    </div>

      <div id="experience" className="flex flex-col md:flex-row justify-center items-start gap-8 py-10 px-6">

        {/* Education Section */}
        <div className="flex justify-center mt-6">
        <div className="w-100 h-130 rounded-full bg-gray-100 shadow-lg flex flex-col justify-center items-center p-6 text-center">
            <h2 className="text-xl font-bold mb-4">Education</h2>
            <p className="text-gray-600">
            <span className='font-bold'>BSc in Computer Science & Information Systems (with Distinction)</span> – Rhodes University
            </p>
            <p className="text-gray-600">
            <span className='font-bold'>BSc Honours in Information Systems</span> - Rhodes University
            </p>
        </div>
        </div>
        {/* Experience Section */}
        <div className="flex justify-center mt-6">
        <div className="w-100 h-130 rounded-full bg-gray-100 shadow-lg flex flex-col justify-center items-center p-6 text-center">
            <h2 className="text-xl font-bold mb-4">Experience</h2>
            <p className="text-gray-600"><span className='font-bold'>Software Engineer (Freelancing)</span>, To-a-T Software Services</p>
            <p className="text-gray-600"><span className='font-bold'>QuantifyYourFuture Virtual Internship</span></p>
            <p className="text-gray-600"><span className='font-bold'>Helpdesk Technician,</span> Rhodes University</p>
            <p className="text-gray-600"><span className='font-bold'>Information Systems Tutor,</span> Rhodes University</p>
            <p className="text-gray-600"><span className='font-bold'>Lecture Venue IT Technician,</span> Rhodes University</p>
        </div>
        </div>
        </div>
    </div>
  );
}
