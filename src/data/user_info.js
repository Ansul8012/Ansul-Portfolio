const info = {
    // ============ MAIN DETAILS ============
    main: {
        name: "Ansul Singh",
        description: "I am a software engineer with expertise in full-stack web development and software engineering principles. I have experience in building scalable, secure and reliable web applications using various frameworks and technologies. I enjoy solving complex problems and learning new skills. I am passionate about creating high-quality code that follows best practices and industry standards.",
        role: "Web Developer",
        photo: "../photo.webp",
        email: "ansulsingh171@gmail.com",
        resume: "../public/AnsulResume.pdf" // <-- your resume file here
    },

    // ============ SOCIAL LINKS ============
    socials: {
		github: "https://github.com/Ansul8012",
		linkedin: "https://www.linkedin.com/in/ansul-singh-91667924b/",
		instagram: "https://www.instagram.com/a.n.s.h.u.l_rawat_27/",
    },

    // ============ PROJECTS ============
    projects: [
        // {
		// 	title: "Draw & Classify",
		// 	description: "Draw & Classify is a web application designed to test my machine learning model, which classifies drawn letters, digits, or shapes.",
		// 	technologies: "React, Tailwind, Tensorflow",
		// 	github: "https://github.com/dsbalico/letter-digit-shape-classification",
        //     link: "https://letterdigitshape-classification.netlify.app/"
		// },
        {
        title: "Viggyan – AI-Powered Smart Library System ( 🚧 building)",
        description: "An AI-driven smart library system that allows students to register, issue, and return books using voice commands, facial recognition, and QR code verification. Also includes an admin panel for full inventory management.",
        technologies: "Next.js, TypeScript, Tailwind CSS, Web Speech API, face-api.js, MongoDB, JWT, Nodemailer",
        github: "https://github.com/Ansul8012/Vigyan.git", // Replace if different
        link: "", // Add live link when available
        status: "building"
    },
		{
			title: "Taulk",
			description: "Taulk is a simple online chatting web application where you can chat and  have a fun conversation with a group of people.It works on top of Socket.io, which allows real-time communication between users. The application is built using React for the frontend and Node.js with Express for the backend.",
			technologies: "React, Tailwind, Socket.io, Node Js , Express Js , MongoDb",
			github: "https://github.com/Ansul8012/Taulk",
            link: "https://taulk-7.onrender.com/login",
            demo: "https://youtu.be/NxBJ07fiR1s?si=k4AJshP1tUz6V56i",
            status: "completed"
		},
		{
			title: "AI POWERED CALCULATOR",
			description: "Developed an AI-based calculator with real-time handwritten expression recognition. Integrated HTML Canvas API for drawing expressions and providing real-time evaluation.Users can draw mathematical expressions, which are recognized and computed instantly.",
			technologies: "React, Canvas API, MathJax, mantine , Tailwind Css ,axios , Python",
			github: "https://github.com/Ansul8012/Ai_calci",
            link: "https://www.example.com",
            demo: "https://youtu.be/IiZ--IFMc6k?si=qSNDHfCl6g8zRbkO",
            status: "completed"
		},  
    ],

    // ============ EDUCATION ============
    education: [
        {
            school: "Graphic Era Deemed To Be University, Dehradun",
            degree: "B.Tech in Computer Science and Engineering",
            duration: "Jul 2022 – Present",
            image: "GEU.webp"
        },
        {
            school: "Kendriya Vidyalaya, Dehradun",
            degree: "PCM + Computer Science",
            duration: "Apr 2020 – Jun 2022",
            image: "KV.webp"
        }
    ],
    

    // ============ EXPERIENCE ============
    experience: [
        {
            position: "Video Editor & Media Lead",
            company: "TBI, Graphic Era University",
            duration: "Feb 2024 – Jan 2025",
            image: "TBI.webp",
            descriptions: [
                "Led media production and developed content strategies to enhance brand visibility.",
                "Created engaging video content for academic and promotional purposes.",
                "Optimized social media campaigns for outreach and engagement."
            ]
        },

    ],
    

    // ============ CERTIFICATES ============
    certificates: [
        {
            title: "Shri Dai Rah Bahadur Memorial Award",
            description: "Awarded to Ansul Singh for outstanding academic excellence",
            icon: "award",
            link: ""
        },
        {
            title: "AWS Cloud Practitioner Essentials",
            description: "Successfully completed by Ansul Singh on 3/12/2025 under AWS Training and Certification",
            icon: "aws",
            link: "https://images.icon-icons.com/2407/PNG/512/aws_icon_146237.png"
        }
    ],

    // ============ CONTACT ============
    contact: {
        title: "Let's Get in Touch: Ways to Connect with Me",
        description: "Thank you for your interest in getting in touch with me. I welcome your feedback, questions, and suggestions. If you have a specific question or comment, please feel free to email me directly at ansulsingh171@gmail.com. I make an effort to respond to all messages within 24 hours, although it may take me longer during busy periods. Finally, if you prefer to connect on social media, you can connect with me using the social media links below.",
    },

    // ============ FOOTER ============
    footer: "© 2025 Ansul Singh. All Rights Reserved"
}

export default info