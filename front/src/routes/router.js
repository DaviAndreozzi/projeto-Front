import { BrowserRouter, Routes, Route } from "react-router-dom";

import { CadastrarPage, PostagemPage, ComentariosPage, LoginPage } from "../pages";
export const Router = () => {
  return (
    <BrowserRouter>
      <LoginPage />
      <Routes>
        <Route path="/cadastrar" element={<CadastrarPage />} />
        <Route path="/postagem/:id" element={<PostagemPage />} />
        <Route path="/comentarios" element={<ComentariosPage />} />
      </Routes>
    </BrowserRouter>
  );
};
