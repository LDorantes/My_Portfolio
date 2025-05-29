export default function Footer() {
  return (
    <footer className="bg-white border-t mt-16 py-6 px-4 text-center text-sm text-gray-600">
      <p>
        Con cariño para todos nuestros seres queridos —{' '}
        <span className="text-purple-700 font-semibold">Andy & Leo</span> 💜
      </p>
      <p className="mt-2">
        © {new Date().getFullYear()} Todos los derechos reservados.
      </p>
    </footer>
  );
}
