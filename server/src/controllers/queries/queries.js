import { BadRequestError } from '../../utils/errors';

class queries {
    constructor (model) {
        this._model = model;
    }

    get model () {
        return this._model;
    }

    create = async (data) => {
        const newInstance = await this.model.create( data );
        if (newInstance) {
            return newInstance;
        }
        throw new BadRequestError();
    };
}

export default queries;