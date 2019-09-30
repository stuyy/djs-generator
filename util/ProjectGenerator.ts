import * as Prompts from './Prompts';

class ProjectGenerator {
    
    constructor(
        private _projectName: string,
        private _framework: boolean,
        private _groups: Array<Array<String>> = [['test', 'test command']],
        private _events: Array<Array<String>> = [['state', 'state events']])
        {

        }
        get projectName(): string { return this._projectName; }
        get framework() : boolean { return this._framework; }
        get groups() : Array<Array<String>> { return this._groups; }
        get events() : Array<Array<String>> { return this._events; }

    private generateProject() {
        
    }
}

let p1 = new ProjectGenerator('djs-1', true);
console.log(p1.projectName);