import { Hexagon, Twitter, Github, Linkedin } from "lucide-react";

const smoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
  e.preventDefault();
  const target = document.querySelector(href);
  if (target) {
    target.scrollIntoView({ behavior: "smooth", block: "start" });
  }
};

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-neutral-950">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8">
            <div className="flex items-center gap-2">
              <div className="rounded-lg bg-gradient-to-r from-violet-500 to-cyan-500 p-1.5">
                <Hexagon size={24} className="text-white" />
              </div>
              <span className="text-xl font-bold text-white">MindMesh</span>
            </div>
            <p className="text-sm leading-6 text-neutral-400">
              Building the distributed intelligence fabric for the next generation of autonomous agents.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-neutral-400 hover:text-white">
                <span className="sr-only">Twitter</span>
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-neutral-400 hover:text-white">
                <span className="sr-only">GitHub</span>
                <Github className="h-5 w-5" />
              </a>
              <a href="#" className="text-neutral-400 hover:text-white">
                <span className="sr-only">LinkedIn</span>
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
          <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-white">Product</h3>
                <ul role="list" className="mt-6 space-y-4">
                  <li>
                    <a href="#architecture" onClick={(e) => smoothScroll(e, "#architecture")} className="text-sm leading-6 text-neutral-400 hover:text-white">
                      Architecture
                    </a>
                  </li>
                  <li>
                    <a href="#apps" onClick={(e) => smoothScroll(e, "#apps")} className="text-sm leading-6 text-neutral-400 hover:text-white">
                      Applications
                    </a>
                  </li>
                  <li>
                    <a href="#vision" onClick={(e) => smoothScroll(e, "#vision")} className="text-sm leading-6 text-neutral-400 hover:text-white">
                      Vision
                    </a>
                  </li>
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 text-white">Company</h3>
                <ul role="list" className="mt-6 space-y-4">
                  <li>
                    <a href="#" className="text-sm leading-6 text-neutral-400 hover:text-white">
                      About
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-sm leading-6 text-neutral-400 hover:text-white">
                      Blog
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-sm leading-6 text-neutral-400 hover:text-white">
                      Careers
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-white">Legal</h3>
                <ul role="list" className="mt-6 space-y-4">
                  <li>
                    <a href="#" className="text-sm leading-6 text-neutral-400 hover:text-white">
                      Privacy
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-sm leading-6 text-neutral-400 hover:text-white">
                      Terms
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-16 border-t border-white/10 pt-8 sm:mt-20 lg:mt-24">
          <p className="text-xs leading-5 text-neutral-400">
            &copy; 2025 MindMesh Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
