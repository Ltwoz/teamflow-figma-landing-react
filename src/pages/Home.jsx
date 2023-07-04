const HomePage = () => {
    return (
        <main className="flex flex-col pt-4 md:pt-[52px] relative">
            {/* <div className="w-[3128px] h-[3128px] bg-[#FBFAFE] border border-[#F0EBFA] rounded-full absolute top-[-2273px] left-1/2 translate-x-[-50%] z-[-99]" /> */}
            <section className="flex flex-col items-center pb-14 md:pb-24">
                <div className="w-fit flex flex-row items-center rounded-full bg-[#F2F9EB]">
                    <div className="rounded-full bg-[#81C43B] text-white px-4 md:px-6 py-1 md:py-2 text-sm md:text-base">
                        Save 90%
                    </div>
                    <p className="px-2 text-sm md:text-base">Get account of $59</p>
                </div>

                <div className="mt-6 flex flex-col items-center justify-center max-w-[760px] text-center space-y-4 md:space-y-8 px-12 md:px-0">
                    <h2 className="font-semibold text-[32px] md:text-[64px] leading-[40px] md:leading-[72px] text-[#35414B]">
                        Manage the team everyone wants to be on
                    </h2>
                    <p className="text-[#4E5A65] leading-6 max-w-[505px]">
                        Simple platform that lets you master what great managers
                        do best, as develop trust, collaborate, and drive team
                        performance.
                    </p>
                </div>

                <div className="mt-6 flex flex-col md:flex-row items-center max-w-[486px] w-full md:rounded md:overflow-hidden px-12 md:px-0 space-y-2 md:space-y-0">
                    <input
                        type="text"
                        placeholder="name@yourcompany.com"
                        className="py-[18px] px-6 border md:flex md:flex-grow border-[#E1E5EA] focus:outline-none w-full md:w-auto rounded md:rounded-none"
                    />
                    <button className="bg-[#794CFF] hover:bg-[#6840e0] text-white py-[18px] px-11 border border-[#794CFF] hover:border-[6840e0] w-full md:w-fit rounded md:rounded-none">
                        Try it free
                    </button>
                </div>

                <div className="mt-4 md:mt-12">
                    <img src="graph1.png" alt="graph1" className="w-full" />
                </div>

                <div className="mt-8 md:mt-12 w-[318px] md:w-[920px] flex flex-col items-center space-y-4 md:space-y-6">
                    <h3 className="text-[#4E5A65] uppercase text-xs md:text-base">
                        Trusted by over{" "}
                        <span className="font-bold">10,000+</span> world&apos;s
                        best teams
                    </h3>
                    <div className="w-full flex flex-row items-center justify-between">
                        <img src="google.png" alt="google" className="scale-[.7] md:scale-100" />
                        <img src="airbnb.png" alt="airbnb" className="scale-[.7] md:scale-100" />
                        <img src="facebook.png" alt="facebook" className="scale-[.7] md:scale-100" />
                        <img src="hubspot.png" alt="hubspot" className="scale-[.7] md:scale-100" />
                        <img src="slack.png" alt="slack" className="hidden md:block scale-[.7] md:scale-100" />
                    </div>
                </div>
            </section>

            <section className="flex flex-col items-center bg-[#FBFAFE] border-y border-[#F0EBFA] py-8 md:py-14 px-4 md:px-0">
                <div className="max-w-[1110px] w-full mx-auto flex flex-col md:flex-row justify-between space-y-8 md:space-y-0 md:space-x-20">
                    <img src="extimeline.png" alt="timeline" />
                    <div className="flex flex-col text-center md:text-start">
                        <div className="flex flex-col py-6 px-8 rounded-tr-lg rounded-tl-lg md:rounded-tl-none md:rounded-br-lg border-b-8 md:border-b-0 md:border-l-8 border-transparent hover:border-[#794CFF] hover:bg-[#F6F3FC]">
                            <h4 className="font-semibold text-lg text-[#35414B]">
                                Survey your team
                            </h4>
                            <p className="text-[#4E5A65] mt-[10px]">
                                Powerful questions that get to the heart of how
                                team members really feel.
                            </p>
                        </div>
                        <hr />
                        <div className="flex flex-col py-6 px-8 rounded-tr-lg rounded-tl-lg md:rounded-tl-none md:rounded-br-lg border-b-8 md:border-b-0 md:border-l-8 border-transparent hover:border-[#794CFF] hover:bg-[#F6F3FC]">
                            <h4 className="font-semibold text-lg text-[#35414B]">
                                Resolve issues quickly
                            </h4>
                            <p className="text-[#4E5A65] mt-[10px]">
                                Anonymous messaging that connects managers and
                                employees.
                            </p>
                        </div>
                        <hr />
                        <div className="flex flex-col py-6 px-8 rounded-tr-lg rounded-tl-lg md:rounded-tl-none md:rounded-br-lg border-b-8 md:border-b-0 md:border-l-8 border-transparent hover:border-[#794CFF] hover:bg-[#F6F3FC]">
                            <h4 className="font-semibold text-lg text-[#35414B]">
                                Plan your 1-on-1s
                            </h4>
                            <p className="text-[#4E5A65] mt-[10px]">
                                Plan meetings together and give a stake
                                employees and teams.
                            </p>
                        </div>
                        <hr />
                        <div className="flex flex-col py-6 px-8 rounded-tr-lg rounded-tl-lg md:rounded-tl-none md:rounded-br-lg border-b-8 md:border-b-0 md:border-l-8 border-transparent hover:border-[#794CFF] hover:bg-[#F6F3FC]">
                            <h4 className="font-semibold text-lg text-[#35414B]">
                                Track your progress
                            </h4>
                            <p className="text-[#4E5A65] mt-[10px]">
                                Easy-to-read reports and sharable results help
                                managers and teams.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="flex flex-col items-center py-14 md:py-[100px] px-12 md:px-0">
                <h1 className="font-semibold text-lg md:text-[40px] text-[#35414B]">
                    Make your work easier
                </h1>
                <div className="max-w-[1110px] w-full flex flex-col mt-14 space-y-[80px]">
                    <div className="flex flex-col md:flex-row space-y-[48px] md:space-y-0 md:space-x-[115px]">
                        <div className="flex flex-col items-center md:items-start text-center md:text-start w-full md:w-80">
                            <img
                                src="icon1.png"
                                alt=""
                                className="w-[64px] h-[64px]"
                            />
                            <h4 className="text-lg font-semibold text-[#35414B] mt-6">
                                Team Surveys & Reports
                            </h4>
                            <p className="text-[#4E5A65] mt-2">
                                Short, anonymous surveys track your team’s needs
                                weekly so you can focus.
                            </p>
                        </div>
                        <div className="flex flex-col items-center md:items-start text-center md:text-start w-full md:w-80">
                            <img
                                src="icon2.png"
                                alt=""
                                className="w-[64px] h-[64px]"
                            />
                            <h4 className="text-lg font-semibold text-[#35414B] mt-6">
                                Collaborative 1:1
                            </h4>
                            <p className="text-[#4E5A65] mt-2">
                                Build relationships by planning 1-on-1s and
                                start meetings.
                            </p>
                        </div>
                        <div className="flex flex-col items-center md:items-start text-center md:text-start w-full md:w-80">
                            <img
                                src="icon3.png"
                                alt=""
                                className="w-[64px] h-[64px]"
                            />
                            <h4 className="text-lg font-semibold text-[#35414B] mt-6">
                                Learning Center
                            </h4>
                            <p className="text-[#4E5A65] mt-2">
                                Quickly get solutions tailored to your personal
                                challenges from the manager.
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row space-y-[48px] md:space-y-0 md:space-x-[115px]">
                        <div className="flex flex-col items-center md:items-start text-center md:text-start w-full md:w-80">
                            <img
                                src="icon4.png"
                                alt=""
                                className="w-[64px] h-[64px]"
                            />
                            <h4 className="text-lg font-semibold text-[#35414B] mt-6">
                                Anonymous Messaging
                            </h4>
                            <p className="text-[#4E5A65] mt-2">
                                Develop trust in a safe channel for important
                                conversations.
                            </p>
                        </div>
                        <div className="flex flex-col items-center md:items-start text-center md:text-start w-full md:w-80">
                            <img
                                src="icon5.png"
                                alt=""
                                className="w-[64px] h-[64px]"
                            />
                            <h4 className="text-lg font-semibold text-[#35414B] mt-6">
                                Conversation Engine
                            </h4>
                            <p className="text-[#4E5A65] mt-2">
                                Communicate confidently with recommended talking
                                points.
                            </p>
                        </div>
                        <div className="flex flex-col items-center md:items-start text-center md:text-start w-full md:w-80">
                            <img
                                src="icon6.png"
                                alt=""
                                className="w-[64px] h-[64px]"
                            />
                            <h4 className="text-lg font-semibold text-[#35414B] mt-6">
                                Exclusives Manager
                            </h4>
                            <p className="text-[#4E5A65] mt-2">
                                Access manager tips, activities and best
                                practices from our team of experts.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="flex flex-col items-center bg-[#FBFAFE] border-y border-[#F0EBFA] py-8 md:py-14 px-4 md:px-0">
                <div className="max-w-[1110px] mx-auto flex flex-col-reverse md:flex-row justify-center items-center md:space-x-[90px]">
                    <div className="flex flex-col items-center px-8 md:px-0 mt-8 md:mt-0">
                        <h3 className="text-lg md:text-[40px] text-[#35414B] font-semibold md:leading-[48px] text-center md:text-start w-2/3 md:w-full">
                            We work how you work everyday
                        </h3>
                        <p className="text-[#4E5A65] mt-4 md:mt-6">
                            Since the easiest things to use actually get used,
                            we adapts to the way your team works – not the other
                            way around.
                        </p>
                        <button className="mt-4 md:mt-8 py-[18px] px-6 bg-[#794CFF] hover:bg-[#6840e0] text-white font-medium rounded w-full md:w-fit">
                            Get started free
                        </button>
                    </div>
                    <img src="graph2.png" alt="" className="w-full" />
                </div>
            </section>
            <section className="flex flex-col items-center py-14 md:py-[100px]">
                <div className="flex flex-col items-center w-full md:w-[540px] text-center px-10 md:px-0">
                    <h1 className="text-lg md:text-[40px] text-[#35414B] font-semibold md:leading-[48px] w-2/3 md:w-[395px] mb-6 md:mb-12">
                        Why customers love working with us
                    </h1>
                    <p className="text-lg text-[#4E5A65]">
                        “It&apos;s amazing what has helped me learn about my
                        team. I don&apos;t worry about blindspots anymore, and
                        1-on-1s have never been more productive. The team loves
                        it.”
                    </p>
                </div>
                <div className="mt-10 md:mt-12 pt-6 md:w-[938px] flex justify-around items-center px-10 md:px-0">
                    <div className="flex flex-col md:flex-row items-center md:space-x-4 w-fit">
                        <img
                            src="jorge.png"
                            alt=""
                            className="w-12 h-12"
                        />
                        <div className="flex flex-col justify-center items-center mt-2 md:mt-0">
                            <h4 className="text-[#4E5A65] font-semibold">
                                Jorge Robertson
                            </h4>
                            <p className="text-[#4E5A65]">CS at Google</p>
                        </div>
                    </div>
                    <div className="hidden md:flex space-x-4 w-fit">
                        <img
                            src="francisco.png"
                            alt=""
                            className="w-12 h-12"
                        />
                        <div className="flex flex-col">
                            <h4 className="text-[#4E5A65] font-semibold">
                                Francisco Bell
                            </h4>
                            <p className="text-[#4E5A65]">
                                Designer at Microsoft
                            </p>
                        </div>
                    </div>
                    <div className="hidden md:flex space-x-4 w-fit">
                        <img
                            src="beth.png"
                            alt=""
                            className="w-12 h-12"
                        />
                        <div className="flex flex-col">
                            <h4 className="text-[#4E5A65] font-semibold">
                                Beth Fox
                            </h4>
                            <p className="text-[#4E5A65]">
                                Developer at Airbnb
                            </p>
                        </div>
                    </div>
                </div>
                <div className="w-full md:w-[1110px] bg-[#796EFF] text-white flex flex-col md:flex-row justify-between items-center md:rounded-2xl px-11 md:px-20 py-8 md:py-16 mt-14 md:mt-[100px]">
                    <h3 className="text-2xl md:text-[32px] leading-[32px] md:leading-[48px] font-semibold md:w-[420px] mb-8 md:mb-0">
                        84% of employees who use trust their direct manager
                    </h3>
                    <div className="flex space-x-6">
                        <a href="#">
                            <img
                                src="google-play-white.png"
                                alt=""
                            />
                        </a>
                        <a href="#">
                            <img src="ios-white.png" alt="" />
                        </a>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default HomePage;
