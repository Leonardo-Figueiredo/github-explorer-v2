import { RepositoryItem } from './RepositoryItem'

const RepositoryList = () => {
  const repository = {
    name: 'shazam',
    description: 'Alakazan in React JS',
    link: 'https://github.com'
  }

  return (
    <section>
      <h1>Lista de repositórios</h1>

      <ul>
        <RepositoryItem repository={repository} />
        <RepositoryItem />
        <RepositoryItem />
      </ul>
    </section>
  )
}

export { RepositoryList }
