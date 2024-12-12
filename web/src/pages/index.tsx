import Image from "next/image";
const src = '/imgs/insta-img.png'
const srcImgForm ='/imgs/insta-logo.png'
const srcImgApple ='/imgs/apple.png'
const srcImgGoole = '/imgs/google.png'
export default function Home() {
  return (

      <div className="h-screen w-screen grid grid-cols-1 md:grid-cols-2 grid-rows-6">
        <div className="row-span-5 justify-end hidden md:flex">
           <Image src={src} alt="instagram-celphone" className="w-max-80" width="420" height="100"/>
        </div>
        <div className="row-span-5 flex-col grid-cols-1 justify-center items-center">
          <form className="w-80 h-3/6 flex-col justify-center items-center border rounded-sm px-10 py-4 gap-5 mt-24 ml-auto mr-auto  md:ml-4">
             <div className="md:mt-10">
             <Image src={srcImgForm} alt="logo" className="w-52 w-max-52" width="400" height="400"/>
             <input className="bg-slate-50 h-9 w-full pl-3 border rounded-sm gap-3" placeholder="Número de Telefone, e-mail" />
             <input  className="bg-slate-50 h-9 w-full pl-3 border rounded-sm mt-2" placeholder="Senha"/>
             <button className="bg-blue-400 w-full rounded-md h-8 text-slate-50 mt-2 hover:bg-blue-300" >entrar</button>
             <div className="flex-col items-center">
              <div className="flex justify-center">
                <a className="text-blue-800 font-bold coursor-pointer"> Logar com facebook</a>
              </div>
              <div className="flex justify-center">
                <a className="text-blue-800 text-sm coursor-pointer">Esqueci minha senha</a>
              </div>
             </div>
             </div>
          </form>
          <div className="border w-80 my-4 text-center py-4  md:ml-4 ml-auto mr-auto">
             <p>Não tem conta? <a className="text-blue-400" >Cadastrar-se</a></p>
          </div>
          <div className="flex w-80 justify-center md:ml-4 ml-auto mr-auto ">
            <p>Baixe o Aplicativo</p>
          </div>
          
          <div className="flex  w-80 py-4 justify-center md:ml-4 ml-auto mr-auto">
            
             <Image src={srcImgApple} alt="apple" className="h-max-10" width="100" height="40"/>
             <Image src={srcImgGoole} alt="google" className="h-max-10" width="100" height="40"/>
          </div>
        </div>
      
          <div className="row-span-1 col-span-1 md:col-span-2 mt-12">
            <ul className="flex flex-wrap gap-3 justify-center ">
              <li className="text-slate-800 text-xs">Meta</li>
              <li className="text-slate-800 text-xs">Sobre</li>
              <li className="text-slate-800 text-xs">Blog</li>
              <li className="text-slate-800 text-xs">Carreiras</li>
              <li className="text-slate-800 text-xs">Ajuda</li>
              <li className="text-slate-800 text-xs">API</li>
              <li className="text-slate-800 text-xs">Privacidade</li>
              <li className="text-slate-800 text-xs">Termos</li>
              <li className="text-slate-800 text-xs">Localizações</li>
              <li className="text-slate-800 text-xs">Instagram  Lite</li> 
              <li className="text-slate-800 text-xs">Threads</li>
              <li className="text-slate-800 text-xs">Carregamento de contatos e não usuários</li>
              <li className="text-slate-800 text-xs">Meta Verified</li>

            </ul>
            <ul className="flex flex-wrap gap-5 justify-center mt-3">
              <li className="text-slate-800 text-xs">Português (Brasil)</li>
              <li className="text-slate-800 text-xs">© 2024 Instagram from Meta</li>
            </ul>
          </div>
       
      </div>

 
    
  );
}
