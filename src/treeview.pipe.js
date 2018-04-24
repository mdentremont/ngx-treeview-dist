import { Pipe } from '@angular/core';
import * as _ from 'lodash';
import { TreeviewItem } from './treeview-item';
var TreeviewPipe = (function () {
    function TreeviewPipe() {
    }
    TreeviewPipe.prototype.transform = function (objects, textField) {
        if (_.isNil(objects)) {
            return undefined;
        }
        return objects.map(function (object) { return new TreeviewItem({ text: object[textField], value: object }); });
    };
    TreeviewPipe.decorators = [
        { type: Pipe, args: [{
                    name: 'ngxTreeview'
                },] },
    ];
    return TreeviewPipe;
}());
export { TreeviewPipe };
//# sourceMappingURL=treeview.pipe.js.map