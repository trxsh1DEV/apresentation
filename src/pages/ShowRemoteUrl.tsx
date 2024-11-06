import { FC, useEffect } from 'react';

const RemoteControlIframe: FC = () => {
  // Recupera a URL da sessão
  const url = sessionStorage.getItem("remoteControlUrl");

  useEffect(() => {
    // Limpa o sessionStorage para evitar dados residuais
    sessionStorage.removeItem("remoteControlUrl");
  }, []); // Executa apenas uma vez quando o componente é montado

  return (
    <main className='w-full h-screen'>
      {url ? (
        <iframe 
          src={`https://remote.infonova.com.br/Viewer${url}`}
          className='border-none w-full h-full'
          title="Remote Control"
          allowFullScreen
        />
      ) : (
<section className='w-full h-screen flex items-center justify-center'>
  <p className='text-3xl'>Erro ao carregar o Acesso Remoto.</p>
</section>
      )}
    </main>
  );
};

export default RemoteControlIframe;
