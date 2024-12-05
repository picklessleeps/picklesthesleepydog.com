"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MoonStar, Coins, Twitter, ExternalLink, Zap } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const staggerChildren = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const Background = dynamic(
  () =>
    import("@/components/animated-background").then(
      (mod) => mod.AnimatedBackground
    ),
  {
    ssr: false,
  }
);

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-indigo-50 relative overflow-hidden">
      <Background />
      {/* Header */}
      <motion.header
        className="p-4 flex items-center justify-between relative z-10"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center gap-2">
          <MoonStar className="h-6 w-6 text-blue-400" />
          <span className="font-bold text-lg text-blue-700">$SLEEPY</span>
        </div>
        <div className="flex gap-4">
          <Link href="https://twitter.com/picklessleeps" target="_blank">
            <Button variant="ghost" size="sm" className="text-blue-600">
              <Twitter className="h-5 w-5" />
            </Button>
          </Link>
          <Link
            href="https://dexscreener.com/solana/d7bmfjmcn7eyjbgckt41gqfzkqjkzr4y1k6audkvt1jp"
            target="_blank"
          >
            <Button className="bg-blue-500 hover:bg-blue-600">
              Buy $SLEEPY
            </Button>
          </Link>
        </div>
      </motion.header>

      {/* Hero Section */}
      <motion.section
        className="container mx-auto px-4 py-12 text-center relative z-10"
        initial="initial"
        animate="animate"
        variants={staggerChildren}
      >
        <div className="max-w-3xl mx-auto">
          <motion.div
            className="relative w-48 h-48 mx-auto mb-8 rounded-full overflow-hidden border-4 border-blue-200"
            variants={fadeIn}
          >
            <Image
              src="/sleepy-pickles.jpg"
              alt="Pickles the Sleepy Dog"
              fill
              className="object-cover"
              priority
            />
          </motion.div>
          <motion.h1
            className="text-4xl md:text-6xl font-bold text-blue-800 mb-4"
            variants={fadeIn}
          >
            Pickles The Sleepy Dog
          </motion.h1>
          <motion.p
            className="text-2xl md:text-3xl text-blue-600 italic mb-8"
            variants={fadeIn}
          >
            &quot;I&apos;m not sleeping, you are&quot;
          </motion.p>
          <motion.div
            className="flex flex-wrap justify-center gap-4"
            variants={staggerChildren}
          >
            <motion.div variants={fadeIn}>
              <Badge
                variant="outline"
                className="px-4 py-2 text-lg bg-blue-100 text-blue-700 inline-flex items-center gap-4 hover:shadow-lg transition-shadow duration-300"
              >
                <span className="text-2xl">😴</span> Feeling Sleepy
              </Badge>
            </motion.div>
            <motion.div variants={fadeIn}>
              <Badge
                variant="outline"
                className="px-4 py-2 text-lg bg-blue-100 text-blue-700 inline-flex items-center gap-4 hover:shadow-lg transition-shadow duration-300"
              >
                <span className="text-2xl">🛋️</span> Getting Comfy
              </Badge>
            </motion.div>
            <motion.div variants={fadeIn}>
              <Badge
                variant="outline"
                className="px-4 py-2 text-lg bg-blue-100 text-blue-700 inline-flex items-center gap-4 hover:shadow-lg transition-shadow duration-300"
              >
                <span className="text-2xl">💤</span> Having Dreams
              </Badge>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Features Section */}
      <motion.section
        className="container mx-auto px-4 py-16 relative z-10"
        initial="initial"
        animate="animate"
        variants={staggerChildren}
      >
        <div className="grid md:grid-cols-3 gap-8">
          <motion.div variants={fadeIn}>
            <div className="bg-blue-100 rounded-3xl p-6 transform rotate-1 hover:rotate-0 transition-transform duration-300 shadow-lg hover:shadow-xl">
              <div className="text-center">
                <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-inner">
                  <MoonStar className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-blue-800 mb-2">
                  Nap Technology
                </h3>
                <p className="text-blue-600">
                  Advanced sleeping algorithms for maximum coziness
                </p>
              </div>
            </div>
          </motion.div>
          <motion.div variants={fadeIn}>
            <div className="bg-indigo-100 rounded-3xl p-6 transform -rotate-1 hover:rotate-0 transition-transform duration-300 shadow-lg hover:shadow-xl">
              <div className="text-center">
                <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-inner">
                  <Coins className="h-8 w-8 text-indigo-600" />
                </div>
                <h3 className="text-xl font-bold text-indigo-800 mb-2">
                  Tokenomics
                </h3>
                <p className="text-indigo-600">
                  Fair launch, no wake-up calls, just peaceful gains
                </p>
              </div>
            </div>
          </motion.div>
          <motion.div variants={fadeIn}>
            <div className="bg-purple-100 rounded-3xl p-6 transform rotate-1 hover:rotate-0 transition-transform duration-300 shadow-lg hover:shadow-xl">
              <div className="text-center">
                <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-inner">
                  <Zap className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold text-purple-800 mb-2">
                  Community
                </h3>
                <p className="text-purple-600">
                  Join our sleepy community of dream believers
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Updated Links Section */}
      <motion.section
        className="container mx-auto px-4 py-16 relative z-10"
        initial="initial"
        animate="animate"
        variants={staggerChildren}
      >
        <div className="flex flex-wrap justify-center gap-4 max-w-3xl mx-auto">
          <motion.div variants={fadeIn}>
            <Link
              href="https://dexscreener.com/solana/d7bmfjmcn7eyjbgckt41gqfzkqjkzr4y1k6audkvt1jp"
              target="_blank"
            >
              <Button
                variant="secondary"
                className="px-6 py-2 text-base bg-blue-100 text-blue-700 hover:bg-blue-200 transition-colors duration-300 flex items-center gap-2 rounded-full"
              >
                <Coins className="h-4 w-4" />
                Buy on DEXScreener
              </Button>
            </Link>
          </motion.div>
          <motion.div variants={fadeIn}>
            <Link
              href="https://solscan.io/token/D7BMfjMcN7eyjBGckt41gqFzKQJKzr4Y1K6aUdKvT1jp"
              target="_blank"
            >
              <Button
                variant="secondary"
                className="px-6 py-2 text-base bg-indigo-100 text-indigo-700 hover:bg-indigo-200 transition-colors duration-300 flex items-center gap-2 rounded-full"
              >
                <ExternalLink className="h-4 w-4" />
                View Contract on Solscan
              </Button>
            </Link>
          </motion.div>
          <motion.div variants={fadeIn}>
            <Link href="https://x.com/picklessleeps" target="_blank">
              <Button
                variant="secondary"
                className="px-6 py-2 text-base bg-purple-100 text-purple-700 hover:bg-purple-200 transition-colors duration-300 flex items-center gap-2 rounded-full"
              >
                <Twitter className="h-4 w-4" />
                Follow on Twitter
              </Button>
            </Link>
          </motion.div>
        </div>
      </motion.section>

      {/* Footer */}
      <motion.footer
        className="border-t border-blue-100 mt-16 relative z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        <div className="container mx-auto px-4 py-8">
          <p className="text-center text-blue-600 flex gap-4 justify-center">
            <span className="italic">💤</span> Don&apos;t disturb, accumulating
            gains... <span className="italic">💤</span>
          </p>
        </div>
      </motion.footer>
    </div>
  );
}
