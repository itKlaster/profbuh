import { Link, Outlet } from "react-router-dom";

export const ArticleRoot = () => {
  return (
    <>
      <header className="container mx-auto py-10 flex justify-between print:hidden">
        <div className="logo text-4xl font-black">БухЭксперт8</div>
        <nav className="print:hidden">
          <ul className="flex gap-x-3">
            <li>
              <Link to="/">
                <button className="btn btn-primary px-10 py-2 rounded-lg text-white">
                  Главная
                </button>
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      <Outlet />
    </>
  );
};
