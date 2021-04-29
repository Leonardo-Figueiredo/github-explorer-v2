import { Repository } from "../entities/Repository"

interface RepositoryItemProps {
  repository: Repository
}

const RepositoryItem: React.FC<RepositoryItemProps> = ({ repository }) => {

  return (
    <li>
      <strong>{repository.name}</strong>
      <p>{repository.description}</p>

      <a href={repository.html_url} target="_blank">Access the repository</a>
    </li>
  )
}

export { RepositoryItem }
