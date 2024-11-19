import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const PrivacyPolicy = () => {
  return (
    <Card className="w-full max-w-4xl mx-auto my-8">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-center">Política de Privacidade</CardTitle>
      </CardHeader>
      <CardContent className="prose max-w-none">
        <section>
          <h2 className="text-xl font-semibold mt-6">1. Coleta de Dados</h2>
          
          <h3 className="text-lg font-medium mt-4">1.1. Dados Coletados Automaticamente</h3>
          <p className="mt-2">O Software coleta automaticamente:</p>
          <ul className="list-disc ml-6 mt-2">
            <li>Informações de hardware</li>
            <li>Software instalado</li>
            <li>Configurações do sistema</li>
            <li>Processos em execução</li>
            <li>Localização dos dispositivos</li>
            <li>Dados de uso do sistema</li>
            <li>Logs de acesso e atividades</li>
          </ul>

          <h3 className="text-lg font-medium mt-4">1.2. Dados Fornecidos pelo Usuário</h3>
          <ul className="list-disc ml-6 mt-2">
            <li>Informações cadastrais</li>
            <li>Dados de inventário manual</li>
            <li>Informações de licenciamento</li>
            <li>Dados de campanhas e mensagens</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold mt-6">2. Uso dos Dados</h2>
          <p className="mt-2">Os dados coletados são utilizados para:</p>
          <ul className="list-disc ml-6 mt-2">
            <li>Fornecer as funcionalidades do Software</li>
            <li>Gerar relatórios e análises</li>
            <li>Enviar alertas e notificações</li>
            <li>Melhorar o desempenho do sistema</li>
            <li>Garantir a segurança</li>
            <li>Cumprir obrigações legais</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold mt-6">3. Compartilhamento de Dados</h2>
          <p className="mt-2">3.1. Os dados podem ser compartilhados:</p>
          <ul className="list-disc ml-6 mt-2">
            <li>Entre diferentes setores da mesma organização</li>
            <li>Com prestadores de serviços autorizados</li>
            <li>Mediante requisição legal</li>
          </ul>
          <p className="mt-2">3.2. Não comercializamos dados pessoais.</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mt-6">4. Segurança dos Dados</h2>
          <p className="mt-2">Implementamos medidas de segurança incluindo:</p>
          <ul className="list-disc ml-6 mt-2">
            <li>Criptografia em trânsito e em repouso</li>
            <li>Controle de acesso baseado em funções</li>
            <li>Monitoramento de atividades suspeitas</li>
            <li>Backups regulares</li>
            <li>Procedimentos de recuperação de desastres</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold mt-6">5. Retenção de Dados</h2>
          <p className="mt-2">5.1. Os dados são mantidos pelo período necessário para:</p>
          <ul className="list-disc ml-6 mt-2">
            <li>Cumprir as finalidades do serviço</li>
            <li>Atender requisitos legais</li>
            <li>Resolver disputas</li>
            <li>Fazer cumprir nossos acordos</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold mt-6">6. Direitos dos Titulares</h2>
          <p className="mt-2">Os titulares dos dados têm direito a:</p>
          <ul className="list-disc ml-6 mt-2">
            <li>Acesso aos dados</li>
            <li>Correção de dados incorretos</li>
            <li>Portabilidade dos dados</li>
            <li>Eliminação dos dados (quando aplicável)</li>
            <li>Revogação do consentimento</li>
            <li>Informações sobre compartilhamento</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold mt-6">7. Contato</h2>
          <p className="mt-2">Para questões sobre privacidade:</p>
          <ul className="list-none mt-2 space-y-2">
            <li>Email: <a href="mailto:agentetrack@infonova.com.br" className="text-blue-500 hover:underline">agentetrack@infonova.com.br</a></li>
            <li>
            Contatos: <a href="https://wa.me/5511969642568" target="_blank" className="text-blue-500 hover:underline">WhatsApp</a>
            </li>
          {/* <li>Endereço: [endereço]</li> */}
        </ul>
        </section>

        <div className="text-sm text-gray-500 mt-8 text-center">
          Última atualização: 08 de Julho de 2024
        </div>
      </CardContent>
    </Card>
  );
};

export default PrivacyPolicy;