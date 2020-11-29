import { InMemoryDbService, RequestInfo } from "angular-in-memory-web-api";
import { Category } from './pages/categories/shared/category.model'

export class InMemoryDatabase implements InMemoryDbService {
    /**
     * Retorna todos os objetos que queremos simular na requisição
     * @param reqInfo 
     */
    createDb() {
        const categories:Category[] = [
            { id: 1, name: 'Moradia', description: 'Pagamento de Contas da Casa' },
            { id: 1, name: 'Saúde', description: 'Plano de Sáude e Remédios' },
            { id: 1, name: 'Lazer', description: 'Cinema, parques, praia, etc' },
            { id: 1, name: 'Salário', description: 'Recebimento de Salário' },
            { id: 1, name: 'Freelas', description: 'Trabalhos como freelancer' }
        ];

        return { categories }
    }

}