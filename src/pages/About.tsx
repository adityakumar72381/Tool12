import React from 'react';
import { Download, Shield, Zap, Globe, ExternalLink, Heart } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 md:px-6 pt-16">
      
      {/* Hero Section */}
      <div className="text-center mb-14 max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
          About{" "}
          <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            Anti-bypass Tool
          </span>
        </h1>
        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300">
          A secure anti-bypass platform built to protect links, revenue, and traffic integrity
        </p>
      </div>

      {/* Features Grid */}
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-14">
        <Feature
          icon={<Zap className="h-6 w-6 text-blue-600 dark:text-blue-400" />}
          title="Lightning Fast"
          desc="Optimized verification with minimal delay, ensuring a smooth experience for legitimate users."
          bg="blue"
        />

        <Feature
          icon={<Shield className="h-6 w-6 text-green-600 dark:text-green-400" />}
          title="Advanced Anti-Bypass"
          desc="Protects against abuse, automation, and unauthorized access using intelligent safeguards."
          bg="green"
        />

        <Feature
          icon={<Download className="h-6 w-6 text-purple-600 dark:text-purple-400" />}
          title="Access Control"
          desc="Built-in protection layers regulate access automatically for secure and controlled usage."
          bg="purple"
        />

        <Feature
          icon={<Globe className="h-6 w-6 text-orange-600 dark:text-orange-400" />}
          title="Cross-Platform"
          desc="Works seamlessly across browsers, apps, mobile devices, and desktops."
          bg="orange"
        />
      </div>

      {/* How it Works */}
      <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-2xl p-8 border border-gray-200 dark:border-gray-700 mb-14 max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
          How It Works
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          <Step
            num="1"
            title="Get Your API Token"
            desc="Access your dashboard to generate a secure token for your integration."
          />

          <Step
            num="2"
            title="Configure Token"
            desc="Securely configure your token to enable protected link processing."
          />

          <Step
            num="3"
            title="Paste Your URL"
            desc="Submit any link you want to protect using the system."
          />

          <Step
            num="4"
            title="Get Your Link"
            desc="Receive a protected link secured with advanced anti-bypass layers."
          />
        </div>
      </div>

      {/* Credits */}
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-2xl p-8 border border-blue-200 dark:border-blue-800 text-center max-w-4xl mx-auto">
        <div className="flex items-center justify-center space-x-2 mb-4">
          <Heart className="h-6 w-6 text-red-500" />
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            Built with Care
          </h2>
        </div>

        <p className="text-gray-600 dark:text-gray-300 mb-4">
          Developed and maintained by Obsidian Bots.
        </p>

        <a
          href="https://t.me/Obsidian_Bots"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors duration-200"
        >
          <ExternalLink className="h-5 w-5" />
          <span>Visit Obsidian Bots</span>
        </a>
      </div>
    </div>
  );
};

/* Helper Components */

const Feature = ({ icon, title, desc, bg }: any) => (
  <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-2xl p-6 border border-gray-200 dark:border-gray-700">
    <div className="flex items-center space-x-3 mb-4">
      <div className={`p-2 bg-${bg}-100 dark:bg-${bg}-900 rounded-lg`}>
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
        {title}
      </h3>
    </div>
    <p className="text-gray-600 dark:text-gray-300">{desc}</p>
);

const Step = ({ num, title, desc }: any) => (
  <div className="flex items-start space-x-4">
    <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-semibold">
      {num}
    </div>
    <div>
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
        {title}
      </h3>
      <p className="text-gray-600 dark:text-gray-300">{desc}</p>
    </div>
  </div>
);

export default About;
