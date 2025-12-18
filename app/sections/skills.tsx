export default function Skills() {
  return (
    <section id="Skills">
      <div className="flex flex-col pt-10 pb-5 relative" id="Skills">
        <h2 className="text-(--red) text-4xl pb-8">[SKILLS]</h2>
        <div className="pr-10">
          <div className="flex items-center">
            <p className="font-bold text-lg pr-4">LANGUAGES</p>
            <hr className="flex-1" />
          </div>
          <p className="pt-4 pb-6">Python • Rust • C/C++ • JavaScript</p>
          <div className="flex items-center">
            <p className="font-bold text-lg pr-4">WEB TECHNOLOGIES</p>
            <hr className="flex-1" />
          </div>
          <p className="pt-4 pb-6">Node.js • Next.js • React • Express • Actix • Axum</p>
          <div className="flex items-center">
            <p className="font-bold text-lg pr-4">DEVOPS</p>
            <hr className="flex-1" />
          </div>
          <p className="pt-4 pb-6">Docker • Kubernetes • Terraform • OpenTofu</p>
          <div className="flex items-center pb-4">
            <p className="font-bold text-lg pr-4">CERTIFICATIONS</p>
            <hr className="flex-1" />
          </div>
          <a
            href="https://catalog-education.oracle.com/ords/certview/sharebadge?id=354BC02F2DF055273A52C0404AD32FA28ED3307D0B88D73B994B058DA2EF4893"
            rel="noopener noreferrer"
          >
            Oracle Cloud Infrastructure Developer Professional 🔗
          </a>
          •
          <a
            href="https://catalog-education.oracle.com/ords/certview/sharebadge?id=35A757628931724C12BC1C4BBBF99F20A56F8B3FC7CECBBECE88B60C980A8AB7"
            rel="noopener noreferrer"
          >
            Oracle Cloud Infrastructure Foundations Associate 🔗
          </a>
        </div>
        <a
          href="https://github.com/Jerson-Cortes?tab=repositories"
          className={`bg-(--red) amulya-bolditalic text-white text-lg text-center my-8 p-0.5 underline`}
          target="_blank"
          rel="noopener noreferrer"
        >
          CHECK OUT MY CURRENT PROJECTS
        </a>
      </div>
    </section>
  )
}
