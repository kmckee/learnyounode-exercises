function getDependencies(tree) {
    if (!tree.dependencies) return [];
    var result = [];
    Object.keys(tree.dependencies).forEach(function(dependencyName) { 
        var dependencyNode = tree.dependencies[dependencyName];
        var formattedName = dependencyName + "@" + dependencyNode.version;
        if (result.indexOf(formattedName) === -1) {
            result.push(formattedName);
            if (dependencyNode.dependencies) {
                result = result.concat(getDependencies(dependencyNode));
            }
        }
    });
    return result.sort();
}

module.exports = getDependencies
