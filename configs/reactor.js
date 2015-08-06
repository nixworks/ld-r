export default {
    // config = scope + spec
    // scope is one the 15 combination of dataset, resource, property and object
    config: {
        //---------depth 1------------
        dataset: {
            'generic': {
                resourceFocusType: [],
                //only allow to view data -> disable edit
                readOnly: 1,
                //used for pagination in resource list
                maxNumberOfResourcesOnPage: 20,
                datasetReactor: ['Dataset']
            },
            'http://ld-r.org/users': {
                readOnly: 0
            },
            'http://www.ebi.ac.uk/chembl/void': {
		resourceFocusType: ['http://rdfs.org/ns/void#DatasetDescription'],
                readOnly: 1
            }
        },
        resource: {
            'generic': {
                //if enabled, will categorize properties in different tabs based on property categories
                usePropertyCategories: 1,
                //used when creating random resources
                dynamicResourceDomain: ['http://example.org'],
                resourceReactor: ['Resource']
            },
	    'http://rdfs.org/ns/void#Dataset' : {
		treatAsResourceType: 1,
		propertyCategories: ['general', 'provenance', 'technical' ],
	    },
            'http://rdfs.org/ns/void#DatasetDescription' : {
                treatAsResourceType: 1,
                propertyCategories: ['general', 'provenance' ],
            }
        },
        property: {
            'generic': {
                propertyReactor: ['IndividualProperty'],
                //following are object-based scope:
                objectReactor: ['IndividualObject'],
                //to view/edit individual object values
                objectIViewer: ['BasicIndividualView'],
                objectIEditor: ['BasicIndividualInput'],
                extendedOEditor: ['BasicIndividualDetailEdit'],
                extendedOViewer: ['BasicIndividualDetailView'],
                shortenURI: 1
            },
	    'http://purl.org/dc/terms/title' : {
		category: ['general']
	    },
            'http://purl.org/dc/terms/description' : {
                category: ['general']
            },
            'http://www.w3.org/1999/02/22-rdf-syntax-ns#type' : {
                category: ['general']
            },
            'http://xmlns.com/foaf/0.1/primaryTopic' : {
                category: ['general']
            },
            'http://purl.org/dc/terms/issued' : {
                category: ['provenance'],
                objectIEditor: ['BasicCalendarInput'],
            },
            'http://purl.org/pav/createdBy' : {
                category: ['provenance']
            },
	    'http://purl.org/pav/createdOn' : {
                category: ['provenance']
            },
            'http://purl.org/pav/lastUpdateOn' : {
                category: ['provenance']
            },
            'http://purl.org/pav/previousVersion' : {
                category: ['provenance']
            },
	    'http://purl.org/dc/terms/created' : {
                category: ['provenance']
            },
            'http://purl.org/dc/terms/license' : {
                category: ['general']
            },
            'http://purl.org/dc/terms/modified' : {
                category: ['provenance']
            },
            'http://purl.org/dc/terms/publisher' : {
                category: ['general']
            },
            'http://purl.org/pav/version' : {
                category: ['general']
            },
            'http://rdfs.org/ns/void#exampleResource' : {
                category: ['technical']
            },
            'http://rdfs.org/ns/void#sparqlEndpoint' : {
                category: ['technical']
            },
            'http://rdfs.org/ns/void#subset' : {
                category: ['general'],
                allowNewValue: 1,
            },
            'http://rdfs.org/ns/void#uriSpace' : {
                category: ['technical']
            },
            'http://rdfs.org/ns/void#vocabulary' : {
                category: ['technical'],
		allowNewValue: 1,
            },
            'http://voag.linkedmodel.org/voag#frequencyOfChange' : {
                category: ['provenance']
            },
            'http://www.w3.org/ns/dcat#landingPage' : {
                category: ['general']
            },
            'http://xmlns.com/foaf/0.1/page' : {
                category: ['general']
            },
            'http://rdfs.org/ns/void#dataDump' : {
                category: ['general']
            },
        },
        //property value = object
        object: {
            'generic': {

            }
        },
        //---------depth 2------------
        dataset_resource: {

        },
        dataset_property: {
            'http://ld-r.org/users': {
                'http://www.w3.org/1999/02/22-rdf-syntax-ns#type': {
                    isHidden: 1
                },
                'http://xmlns.com/foaf/0.1/accountName': {
                    label: ['Username'],
                    readOnly: 1
                },
                'http://xmlns.com/foaf/0.1/firstName': {
                    label: ['First Name']
                },
                'http://xmlns.com/foaf/0.1/lastName': {
                    label: ['Last Name']
                },
                'http://xmlns.com/foaf/0.1/mbox': {
                    label: ['Email Address'],
                    readOnly: 1
                },
                'https://github.com/ali1k/ld-reactor/blob/master/vocabulary/index.ttl#password': {
                    label: ['Password'],
                    objectIViewer: ['PasswordView'],
                    objectIEditor: ['PasswordInput']
                },
                'https://github.com/ali1k/ld-reactor/blob/master/vocabulary/index.ttl#editorOfGraph': {
                    label: ['Editor of Graph'],
                    allowNewValue: 1
                },
                'https://github.com/ali1k/ld-reactor/blob/master/vocabulary/index.ttl#editorOfResource': {
                    label: ['Editor of Resource'],
                    allowNewValue: 1
                },
                'https://github.com/ali1k/ld-reactor/blob/master/vocabulary/index.ttl#editorOfProperty': {
                    label: ['Editor of Property'],
                    allowNewValue: 1,
                    allowExtension: 1,
                    hasBlankNode: 1,
                    autoLoadDetails: 1,
                    extensions: [
                        {
                            spec: {
                                propertyURI: 'https://github.com/ali1k/ld-reactor/blob/master/vocabulary/index.ttl#resource',
                                instances: [{value: 'http://exampleResource.org', valueType: 'uri'}]
                            },
                            config: {
                                hint: ['Resource URI under which the property is exposed.'],
                                label: ['Resource']
                            }
                        },
                        {
                            spec: {
                                propertyURI: 'https://github.com/ali1k/ld-reactor/blob/master/vocabulary/index.ttl#property',
                                instances: [{value: 'http://exampleProperty.org', valueType: 'uri'}]
                            },
                            config: {
                                hint: ['Property URI'],
                                label: ['Property']
                            }
                        }
                    ]
                },
                'http://xmlns.com/foaf/0.1/organization': {
                    label: ['Organization'],
                    allowNewValue: 1,
                    objectIViewer: ['BasicDBpediaView'],
                    objectIEditor: ['DBpediaInput']
                }
            }
        },
        dataset_object: {

        },
        resource_property: {

        },
        resource_object: {

        },
        property_object: {

        },
        //---------depth 3------------
        dataset_resource_property: {

        },
        dataset_resource_object: {

        },
        dataset_property_object: {

        },
        resource_property_object: {

        },
        //---------depth 4------------
        dataset_resource_property_object: {

        }
    }
};
