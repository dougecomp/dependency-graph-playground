import { describe, it } from 'mocha'
import { expect } from 'chai'
import { DepGraph } from 'dependency-graph'

describe('Dependency Graph', () => {
  it('should create basic graph', () => {
    const graph = new DepGraph()

    graph.addNode('A')
    graph.addNode('B')
    graph.addNode('C')

    graph.addDependency('A', 'B')
    graph.addDependency('B', 'C')

    expect(graph.size()).to.be.equal(3)
    expect(graph.dependenciesOf('A')).to.be.deep.equal(['C', 'B'])
  })

  it('should create a slightly complex graph', () => {
    const graph = new DepGraph()

    graph.addNode('A')
    graph.addNode('B')
    graph.addNode('C')
    graph.addNode('D')
    graph.addNode('E')

    graph.addDependency('A', 'B')
    graph.addDependency('A', 'C')
    graph.addDependency('B', 'E')
    graph.addDependency('C', 'E')
    graph.addDependency('C', 'D')

    expect(graph.size()).to.be.equal(5)
    expect(graph.dependenciesOf('A', true)).to.be.deep.equal(['E', 'D'])
    expect(graph.dependantsOf('E')).to.be.deep.equal(['A', 'B', 'C'])
    expect(graph.dependantsOf('D')).to.be.deep.equal(['A', 'C'])
  })
})
