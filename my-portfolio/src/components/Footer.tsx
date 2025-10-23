export default function Footer() {
  return (
    <footer id="contact" className="bg-brand-dark text-brand-light py-10 text-center">
      <p className="text-lg font-medium mb-2">Let’s build something extraordinary.</p>
      <p>
        <a href="mailto:leodoor2@gmail.com" className="underline hover:text-brand-orange">
          leodoor2@gmail.com
        </a>
      </p>
      <p className="text-sm mt-4 text-gray-400">
        © {new Date().getFullYear()} Leonardo Dorantes — Kerentic
      </p>
    </footer>
  );
}
