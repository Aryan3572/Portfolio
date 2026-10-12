"use client";

import { motion } from "framer-motion";

interface Tool {
  name: string;
  icon: string;
}

interface Domain {
  id: string;
  name: string;
  tools: Tool[];
}

const domains: Domain[] = [
  {
    id: "01",
    name: "WEB3 / BLOCKCHAIN",
    tools: [
      { name: "Chainlink VRF", icon: "https://cdn.simpleicons.org/chainlink/375BD2" },
      { name: "Foundry", icon: "https://cdn.simpleicons.org/ethereum/3C3C3D" },
      { name: "Smart Contracts", icon: "https://cdn.simpleicons.org/polkadot/E6007A" },
      { name: "Solidity", icon: "https://cdn.simpleicons.org/solidity/363636" },
      { name: "Ethereum", icon: "https://cdn.simpleicons.org/ethereum/3C3C3D" },
      { name: "Ethers.js", icon: "https://cdn.simpleicons.org/ethereum/375BD2" },
      { name: "Web3.js", icon: "https://cdn.simpleicons.org/web3dotjs/F16822" },
      { name: "Hardhat", icon: "https://cdn.simpleicons.org/hardhat/FFF100" },
    ],
  },
  {
    id: "02",
    name: "FRONT-END",
    tools: [
      { name: "Turborepo", icon: "https://cdn.simpleicons.org/turborepo/EF4444" },
      { name: "pnpm", icon: "https://cdn.simpleicons.org/pnpm/F69220" },
      { name: "React", icon: "https://cdn.simpleicons.org/react/61DAFB" },
      { name: "Next.js", icon: "https://cdn.simpleicons.org/nextdotjs/000000" },
      { name: "TypeScript", icon: "https://cdn.simpleicons.org/typescript/3178C6" },
      { name: "JavaScript", icon: "https://cdn.simpleicons.org/javascript/F7DF1E" },
      { name: "Tailwind CSS", icon: "https://cdn.simpleicons.org/tailwindcss/06B6D4" },
      { name: "Framer Motion", icon: "https://cdn.simpleicons.org/framer/0055FF" },
      { name: "React Native", icon: "https://cdn.simpleicons.org/react/61DAFB" },
      { name: "TanStack Start", icon: "https://cdn.simpleicons.org/reactquery/FF4154" },
    ],
  },
  {
    id: "03",
    name: "BACK-END",
    tools: [
      { name: "Cloudflare Workers", icon: "https://cdn.simpleicons.org/cloudflare/F38020" },
      { name: "REST APIs", icon: "https://cdn.simpleicons.org/fastapi/009688" },
      { name: "Node.js", icon: "https://cdn.simpleicons.org/nodedotjs/339933" },
      { name: "Express.js", icon: "https://cdn.simpleicons.org/express/000000" },
      { name: "Flask", icon: "https://cdn.simpleicons.org/flask/000000" },
      { name: "JWT", icon: "https://cdn.simpleicons.org/jsonwebtokens/000000" },
      { name: "WebSockets", icon: "https://cdn.simpleicons.org/socketdotio/010101" },
      { name: "WebRTC", icon: "https://cdn.simpleicons.org/webrtc/333333" },
      { name: "gRPC", icon: "https://cdn.simpleicons.org/grpc/244C5A" },
      { name: "Socket.IO", icon: "https://cdn.simpleicons.org/socketdotio/010101" },
      { name: "Zod", icon: "https://cdn.simpleicons.org/zod/3E67B1" },
      { name: "Razorpay API", icon: "https://cdn.simpleicons.org/razorpay/02042B" },
    ],
  },
  {
    id: "04",
    name: "DATABASES & MESSAGING",
    tools: [
      { name: "PostgreSQL", icon: "https://cdn.simpleicons.org/postgresql/4169E1" },
      { name: "MySQL", icon: "https://cdn.simpleicons.org/mysql/4479A1" },
      { name: "MongoDB", icon: "https://cdn.simpleicons.org/mongodb/47A248" },
      { name: "Redis", icon: "https://cdn.simpleicons.org/redis/DC382D" },
      { name: "Prisma", icon: "https://cdn.simpleicons.org/prisma/2D3748" },
      { name: "RabbitMQ", icon: "https://cdn.simpleicons.org/rabbitmq/FF6600" },
      { name: "BullMQ", icon: "https://cdn.simpleicons.org/redis/DC382D" },
      { name: "Supabase", icon: "https://cdn.simpleicons.org/supabase/3ECF8E" },
      { name: "Neon DB", icon: "https://cdn.simpleicons.org/neon/00E599" },
      { name: "Cassandra", icon: "https://cdn.simpleicons.org/apachecassandra/1287B1" },
    ],
  },
  {
    id: "05",
    name: "AI & MACHINE LEARNING",
    tools: [
      { name: "Python", icon: "https://cdn.simpleicons.org/python/3776AB" },
      { name: "PyTorch", icon: "https://cdn.simpleicons.org/pytorch/EE4C2C" },
      { name: "OpenCV", icon: "https://cdn.simpleicons.org/opencv/5C3EE8" },
      { name: "Deep Learning", icon: "https://cdn.simpleicons.org/tensorflow/FF6F00" },
      { name: "Computer Vision", icon: "https://cdn.simpleicons.org/scikitlearn/F7931E" },
      { name: "Whisper API", icon: "https://cdn.simpleicons.org/openai/412991" },
      { name: "LangChain", icon: "https://cdn.simpleicons.org/langchain/1C3C3C" },
      { name: "NumPy", icon: "https://cdn.simpleicons.org/numpy/013243" },
    ],
  },
  {
    id: "06",
    name: "INFRASTRUCTURE & DEVOPS",
    tools: [
      { name: "Docker", icon: "https://cdn.simpleicons.org/docker/2496ED" },
      { name: "Kubernetes", icon: "https://cdn.simpleicons.org/kubernetes/326CE5" },
      { name: "GitHub Actions", icon: "https://cdn.simpleicons.org/githubactions/2088FF" },
      { name: "Git", icon: "https://cdn.simpleicons.org/git/F05032" },
      { name: "Vercel", icon: "https://cdn.simpleicons.org/vercel/000000" },
      { name: "Render", icon: "https://cdn.simpleicons.org/render/46E3B7" },
      { name: "Linux", icon: "https://cdn.simpleicons.org/linux/FCC624" },
      { name: "Nginx", icon: "https://cdn.simpleicons.org/nginx/009639" },
      { name: "Postman", icon: "https://cdn.simpleicons.org/postman/FF6C37" },
    ],
  },
  {
    id: "07",
    name: "LANGUAGES",
    tools: [
      { name: "TypeScript", icon: "https://cdn.simpleicons.org/typescript/3178C6" },
      { name: "JavaScript", icon: "https://cdn.simpleicons.org/javascript/F7DF1E" },
      { name: "Python", icon: "https://cdn.simpleicons.org/python/3776AB" },
      { name: "C++", icon: "https://cdn.simpleicons.org/cplusplus/00599C" },
      { name: "Solidity", icon: "https://cdn.simpleicons.org/solidity/363636" },
      { name: "SQL", icon: "https://cdn.simpleicons.org/mysql/4479A1" },
      { name: "HTML5 / CSS3", icon: "https://cdn.simpleicons.org/html5/E34F26" },
    ],
  },
  {
    id: "08",
    name: "SYSTEMS & ARCHITECTURE",
    tools: [
      { name: "Distributed Systems", icon: "https://cdn.simpleicons.org/diagramsdotnet/F08705" },
      { name: "ACID Compliance", icon: "https://cdn.simpleicons.org/databricks/FF3621" },
      { name: "Queue Decoupling", icon: "https://cdn.simpleicons.org/apachekafka/231F20" },
      { name: "Monorepo Architecture", icon: "https://cdn.simpleicons.org/nx/143055" },
      { name: "CI/CD Pipelines", icon: "https://cdn.simpleicons.org/githubactions/2088FF" },
      { name: "REST & RPC Design", icon: "https://cdn.simpleicons.org/swagger/85EA2D" },
      { name: "Clean Architecture", icon: "https://cdn.simpleicons.org/blueprint/137CBD" },
    ],
  },
];

export default function Skills() {
  const totalTools = domains.reduce((sum, d) => sum + d.tools.length, 0);

  return (
    <section
      id="skills"
      className="relative w-full bg-[#F5F4F3] py-20 sm:py-28 lg:py-36 overflow-hidden border-t-2 border-black select-none"
    >
      {/* Background blueprint square line-grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-40"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(0, 0, 0, 0.05) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(0, 0, 0, 0.05) 1px, transparent 1px)
          `,
          backgroundSize: "48px 48px",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center mb-12 sm:mb-16 lg:mb-20"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border-2 border-black shadow-[2px_2px_0_0_#0A0A0A] mb-4">
            <span className="w-2 h-2 rounded-full bg-[#FF5800]" />
            <span className="text-xs font-mono font-bold tracking-widest text-[#0A0A0A] uppercase">
              04 / SKILLS
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight text-[#0A0A0A] leading-[0.95]">
            The stack I reach for.
          </h2>

          <p className="mt-4 text-xs sm:text-base text-neutral-600 font-medium">
            {domains.length} domains, {totalTools} tools. Hover or focus a row to hold it still.
          </p>
        </motion.div>

        {/* Domain Marquee Rows List */}
        <div className="flex flex-col gap-6 sm:gap-8 lg:gap-10">
          {domains.map((domain, index) => {
            const isReverse = index % 2 === 1;
            // 4 copies of tools ensures seamless infinite loop across all viewports
            const marqueeItems = [
              ...domain.tools,
              ...domain.tools,
              ...domain.tools,
              ...domain.tools,
            ];

            return (
              <motion.div
                key={domain.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="group relative w-full flex flex-col gap-3 py-1"
              >
                {/* Domain Header Row */}
                <div className="flex items-center justify-between text-xs font-mono px-2 sm:px-4">
                  <div className="flex items-center gap-2.5">
                    <span className="font-bold text-[#FF5800]">{domain.id}</span>
                    <span className="font-bold tracking-widest text-neutral-700 uppercase">
                      {domain.name}
                    </span>
                  </div>

                  <div className="flex-1 h-px bg-black/10 mx-4 hidden sm:block" />

                  <span className="text-neutral-400 font-mono text-[11px] font-bold">
                    {domain.tools.length}
                  </span>
                </div>

                {/* Continuous Marquee Track */}
                <div className="overflow-hidden w-full py-2 select-none">
                  <div
                    className={`${
                      isReverse ? "animate-marquee-infinite-reverse" : "animate-marquee-infinite"
                    } flex items-center gap-3 sm:gap-3.5`}
                  >
                    {marqueeItems.map((tool, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-2 sm:gap-2.5 bg-white px-3.5 sm:px-5 py-2 sm:py-2.5 rounded-full border-2 border-black shadow-[2px_2px_0_0_#0A0A0A] hover:border-[#FF5800] hover:shadow-[3px_3px_0_0_#FF5800] hover:scale-105 transition-all cursor-default whitespace-nowrap"
                      >
                        <img
                          src={tool.icon}
                          alt={tool.name}
                          className="w-4 h-4 object-contain"
                          loading="lazy"
                          onError={(e) => {
                            (e.target as HTMLElement).style.display = "none";
                          }}
                        />
                        <span className="text-xs sm:text-sm font-bold text-[#0A0A0A]">
                          {tool.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
