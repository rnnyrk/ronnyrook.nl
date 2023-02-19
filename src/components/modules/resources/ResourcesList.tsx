export const ResourcesList = ({ resources }: ResourcesListProps) => {
  console.log({
    ResourcesList: resources,
    // Link: resources.properties,
  });

  // return <pre>{JSON.stringify(resources, null, 2)}</pre>;
  return (
    <div>
      {resources &&
        resources.map((resource: any) => {
          return (
            <div key={resource.id}>
              <h1>{resource.title}</h1>
              <p>{resource.link}</p>
              <p>{resource.tags?.map((tag) => tag.name)}</p>
            </div>
          );
        })}
    </div>
  );
};

type ResourcesListProps = {
  resources: any;
};
