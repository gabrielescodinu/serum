import React from "react";

const Team = () => {
    const teamMembers = [
        {
            name: "John McCulling",
            position: "Founder / CEO",
            imageUrl:
                "https://images.unsplash.com/photo-1567515004624-219c11d31f2e??auto=format&q=75&fit=crop&w=256",
            linkedin: '#',
            twitter: '#',
        },
        {
            name: "Kate Berg",
            position: "CFO",
            imageUrl:
                "https://images.unsplash.com/photo-1532073150508-0c1df022bdd1?auto=format&q=75&fit=crop&w=256",
            linkedin: '#',
            twitter: '#',
        },
        {
            name: "Greg Jackson",
            position: "CTO",
            imageUrl:
                "https://images.unsplash.com/photo-1463453091185-61582044d556?auto=format&q=75&fit=crop&w=256",
            linkedin: '#',
            twitter: '#',
        },
        {
            name: "Robert Greyson",
            position: "Creative Director",
            imageUrl:
                "https://images.unsplash.com/photo-1529068755536-a5ade0dcb4e8?auto=format&q=75&fit=crop&w=256",
            linkedin: '#',
            twitter: '#',
        },
        {
            name: "John Roberts",
            position: "Investor Relations",
            imageUrl:
                "https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?auto=format&q=75&fit=crop&w=256",
            linkedin: '#',
            twitter: '#',
        },
        {
            name: "Judy Amandez",
            position: "Senior Art Director",
            imageUrl:
                "https://images.unsplash.com/photo-1529068755536-a5ade0dcb4e8?auto=format&q=75&fit=crop&w=256",
            linkedin: '#',
            twitter: '#',
        },
        {
            name: "Rahul Williams",
            position: "Creative Director",
            imageUrl:
                "https://images.unsplash.com/photo-1566492031773-4f4e44671857?auto=format&q=75&fit=crop&w=256",
            linkedin: '#',
            twitter: '#',
        },
        {
            name: "Ari Ferris",
            position: "Marketing Analyst",
            imageUrl:
                "https://images.unsplash.com/photo-1562904403-a5106bef8319?auto=format&q=75&fit=crop&w=256",
            linkedin: '#',
            twitter: '#',
        },
    ];
    const Content = {
        title: "Meet our Team",
        description: `This is a section of some simple filler text, also known as placeholder text. It shares some characteristics of a real written text but is random or otherwise generated.`,
    }

    return (
        <section className="bg-secondary">
            <div className="py-32">
                <div className="mx-auto max-w-screen-xl px-4 md:px-8 relative">
                    <div className="mb-10 md:mb-16">
                        <h2 className="mb-4 text-center text-2xl font-bold text-gray-100 md:mb-6 lg:text-3xl">
                            {Content.title}
                        </h2>
                        <p className="mx-auto max-w-screen-md text-center text-gray-300 md:text-lg">
                            {Content.description}
                        </p>
                    </div>
                    <div className="grid grid-cols-2 gap-x-4 gap-y-8 md:grid-cols-4 lg:gap-x-8 lg:gap-y-12">
                        {teamMembers.map((member, index) => (
                            <div className="flex flex-col items-center" key={index}>
                                <div className="mb-2 h-24 w-24 overflow-hidden rounded-full bg-gray-100 shadow-lg md:mb-4 md:w-32 md:h-32">
                                    <img src={member.imageUrl} alt={member.name} className="h-full w-full object-cover" />
                                </div>
                                <h3 className="text-gray-100 text-lg font-semibold mb-1">{member.name}</h3>
                                <p className="text-gray-300 text-sm">{member.position}</p>
                                <div className="flex justify-center mt-4">
                                    <div className="flex gap-4">
                                        <a href="/" target="_blank" className="text-gray-400 transition duration-100 hover:text-primary active:text-gray-600">
                                            <svg className="h-5 w-5" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                                            </svg>
                                        </a>
                                        <a href="/" target="_blank" className="text-gray-400 transition duration-100 hover:text-primary active:text-gray-600">
                                            <svg className="h-5 w-5" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="absolute inset-0 max-w-md mx-auto h-72 blur-[118px]" style={{ background: "linear-gradient(#14b8a642, #14b8a61a)" }}></div>
                </div>
            </div>
        </section>
    );
};

export default Team;
