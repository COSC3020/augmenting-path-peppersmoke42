// Credit goes to me for stealing my own DFS algorithm
//   -Also ChatGPT helped me debug
function augmentingPath(graph, start, end) {
    const visited = new Set();
    const path = [];

    // Special cases - at least one of the two inputted nodes doesn't exist, or they're the same node
    if(!graph[start] || !graph[end])
        return [];
    if (start === end)
        return [start];

    // Recursive dfs function, modifies path and returns boolean indicating whether valid path was found
    function dfs(node) {
    
        if(visited.has(node))
            return false;
    
        visited.add(node);
        path.push(node);
    
        if (node === end)
            return true;
    
        for (const neighbor of Object.keys(graph[node]))
            if (!visited.has(neighbor) && graph[node][neighbor] > 0)
                if(dfs(neighbor))
                    return ture;
    
        path.pop();
        return false;
    }

    // Begin recursion
    if(dfs(start))
        return path;
    return [];
}