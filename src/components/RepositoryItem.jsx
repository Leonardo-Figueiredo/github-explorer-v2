const RepositoryItem = ({ repository }) => {

  return (
    <li>
      <strong>{repository?.name ?? 'Repository'}</strong>
      <p>{repository?.description}</p>

      <a href={repository?.link} target="_blank">Access the repository</a>
    </li>
  )
}

export { RepositoryItem }
