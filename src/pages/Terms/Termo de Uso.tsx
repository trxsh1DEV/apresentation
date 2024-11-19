import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const TermsOfUse = () => {
  return (
    <Card className="w-full max-w-4xl mx-auto my-8">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-center">Termos de Uso</CardTitle>
      </CardHeader>
      <CardContent className="prose max-w-none">
        <section>
          <h2 className="text-xl font-semibold mt-6">1. Objeto e Aceitação</h2>
          <p className="mt-2">
            Este documento estabelece os termos e condições para uso do software Agente Track, 
            uma solução de gerenciamento de ativos de TI e inventário. 
            Ao utilizar o Software, você concorda expressamente com estes termos.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mt-6">2. Descrição do Serviço</h2>
          <p className="mt-2">O Software oferece as seguintes funcionalidades principais:</p>
          <ul className="list-disc ml-6 mt-2">
            <li>Inventário automatizado de hardware e software</li>
            <li>Gerenciamento de ativos de TI</li>
            <li>Monitoramento de sistemas e dispositivos</li>
            <li>Gestão de licenciamento</li>
            <li>Controle de estoque</li>
            <li>Geração de relatórios</li>
            <li>Sistema de alertas</li>
            <li>Gerenciamento remoto</li>
            <li>Controle de depreciação</li>
            <li>Geolocalização</li>
            <li>Mensageria e campanhas informativas</li>
            <li>API para integrações</li>
            <li>Suporte a múltiplos inquilinos (multi-tenancy)</li>
            <li>Sistema de controle contra perda e furto</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold mt-6">3. Licença de Uso</h2>
          <p className="mt-2">3.1. O Software é licenciado, não vendido, para uso conforme os termos deste acordo.</p>
          <p className="mt-2">3.2. A licença concedida é:</p>
          <ul className="list-disc ml-6 mt-2">
            <li>Não exclusiva</li>
            <li>Não transferível</li>
            <li>Limitada ao período de contratação</li>
            <li>Sujeita ao pagamento das taxas aplicáveis</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold mt-6">4. Responsabilidades do Cliente</h2>
          <p className="mt-2">O cliente se compromete a:</p>
          <ul className="list-disc ml-6 mt-2">
            <li>Manter suas credenciais de acesso em segurança</li>
            <li>Utilizar o Software de acordo com a legislação aplicável</li>
            <li>Não realizar engenharia reversa do Software</li>
            <li>Manter suas informações cadastrais atualizadas</li>
            <li>Garantir a precisão dos dados inseridos</li>
            <li>Obter consentimento adequado dos usuários monitorados</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold mt-6">5. Disponibilidade e Suporte</h2>
          <p className="mt-2">5.1. O Software será disponibilizado em regime 24/7.</p>
          <p className="mt-2">5.2. Manutenções programadas serão informadas com antecedência mínima de 7 dias.</p>
        </section>

        <div className="text-sm text-gray-500 mt-8 text-center">
          Última atualização: 08 de Julho de 2024
        </div>
      </CardContent>
    </Card>
  );
};

export default TermsOfUse;