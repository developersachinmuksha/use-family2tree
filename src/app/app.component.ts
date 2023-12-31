import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'util-npm-package';
  isFirst = true;
  family_members: any = {
    family_relation_id: '27a54e4a-d003-4791-ac3f-66074ddf445a',
    father_id: null,
    mother_id: null,
    family_id: 'e72d7850-6823-4a78-8a41-052791b08b19',
    user_id: 'bdc061d8-2099-4888-a905-a3431ee4c756',
    order: 0,
    user_detail: {
      user_id: 'bdc061d8-2099-4888-a905-a3431ee4c756',
      first_name: 'Kristen',
      last_name: 'Forrest',
      gender: 1,
      unique_code: null,
      profile_pic: null,
      friendRequest: null,
    },
    spouses: [
      {
        id: 'dc3db377-3d8c-4826-ab05-5d023d87574c',
        spouse_id: '967e8fc3-aba5-461a-9994-d26d7222cb50',
        user_id: 'bdc061d8-2099-4888-a905-a3431ee4c756',
        family_id: 'e72d7850-6823-4a78-8a41-052791b08b19',
        spouse_detail: {
          user_id: '967e8fc3-aba5-461a-9994-d26d7222cb50',
          first_name: 'Nevada',
          last_name: 'Candace',
          gender: 2,
          unique_code: null,
          profile_pic: null,
          friendRequest: null,
        },
        childrens: [
          {
            id: 'ecb8a8a5-3d60-450d-b0b6-a1916ad90572',
            child_id: 'bb5c4309-9b97-4ff3-853b-92588fbf2618',
            user_id: '967e8fc3-aba5-461a-9994-d26d7222cb50',
            family_id: 'e72d7850-6823-4a78-8a41-052791b08b19',
            child_detail: {
              user_id: 'bb5c4309-9b97-4ff3-853b-92588fbf2618',
              first_name: 'Aristotle',
              last_name: 'Father',
              gender: 1,
              unique_code: null,
              profile_pic: null,
              friendRequest: null,
            },
          },
        ],
        children: [
          {
            family_relation_id: '52f1c98b-8e81-442a-aec8-7cc9a7df2125',
            father_id: 'bdc061d8-2099-4888-a905-a3431ee4c756',
            mother_id: '967e8fc3-aba5-461a-9994-d26d7222cb50',
            family_id: 'e72d7850-6823-4a78-8a41-052791b08b19',
            user_id: 'bb5c4309-9b97-4ff3-853b-92588fbf2618',
            order: 1,
            user_detail: {
              user_id: 'bb5c4309-9b97-4ff3-853b-92588fbf2618',
              first_name: 'Aristotle',
              last_name: 'Father',
              gender: 1,
              unique_code: null,
              profile_pic: null,
              friendRequest: null,
            },
            spouses: [
              {
                id: '34994d06-87df-4db3-8e80-d1662a02fcd1',
                spouse_id: '4b5cc24a-e757-4121-a345-42679710021b',
                user_id: 'bb5c4309-9b97-4ff3-853b-92588fbf2618',
                family_id: 'e72d7850-6823-4a78-8a41-052791b08b19',
                spouse_detail: {
                  user_id: '4b5cc24a-e757-4121-a345-42679710021b',
                  first_name: 'Aristotle',
                  last_name: 'Mother',
                  gender: 2,
                  unique_code: null,
                  profile_pic: null,
                  friendRequest: null,
                },
                childrens: [
                  {
                    id: 'dcf4645d-665b-4a3b-9b71-38192bc193af',
                    child_id: 'f87fa025-9447-429b-81ce-16617013c499',
                    user_id: '4b5cc24a-e757-4121-a345-42679710021b',
                    family_id: 'e72d7850-6823-4a78-8a41-052791b08b19',
                    child_detail: {
                      user_id: 'f87fa025-9447-429b-81ce-16617013c499',
                      first_name: 'Aristotle',
                      last_name: 'Lester',
                      gender: 1,
                      unique_code: 'Fam1E15',
                      profile_pic: null,
                      friendRequest: null,
                    },
                  },
                  {
                    id: '5187315b-d99c-46b3-84fb-8fdaadcf3266',
                    child_id: 'bfc1d531-8c51-4fda-ab10-63327572e7fc',
                    user_id: '4b5cc24a-e757-4121-a345-42679710021b',
                    family_id: 'e72d7850-6823-4a78-8a41-052791b08b19',
                    child_detail: {
                      user_id: 'bfc1d531-8c51-4fda-ab10-63327572e7fc',
                      first_name: 'Colin',
                      last_name: 'Minerva',
                      gender: 2,
                      unique_code: null,
                      profile_pic: null,
                      friendRequest: null,
                    },
                  },
                  {
                    id: '49eed377-f6bd-4a40-ab91-38ef920cc0dc',
                    child_id: '0a8eb535-2769-4820-87f8-1be1530c7463',
                    user_id: '4b5cc24a-e757-4121-a345-42679710021b',
                    family_id: 'e72d7850-6823-4a78-8a41-052791b08b19',
                    child_detail: {
                      user_id: '0a8eb535-2769-4820-87f8-1be1530c7463',
                      first_name: 'Wilma',
                      last_name: 'Jael',
                      gender: 2,
                      unique_code: null,
                      profile_pic: null,
                      friendRequest: null,
                    },
                  },
                ],
                children: [
                  {
                    family_relation_id: '6f83b4c8-3e3f-4221-9113-eee629af6379',
                    father_id: 'bb5c4309-9b97-4ff3-853b-92588fbf2618',
                    mother_id: '4b5cc24a-e757-4121-a345-42679710021b',
                    family_id: 'e72d7850-6823-4a78-8a41-052791b08b19',
                    user_id: 'f87fa025-9447-429b-81ce-16617013c499',
                    order: 2,
                    user_detail: {
                      user_id: 'f87fa025-9447-429b-81ce-16617013c499',
                      first_name: 'Aristotle',
                      last_name: 'Lester',
                      gender: 1,
                      unique_code: 'Fam1E15',
                      profile_pic: null,
                      friendRequest: null,
                    },
                    spouses: [
                      {
                        id: 'f0b6f577-76ea-4c2d-904e-dcdf6953ebf3',
                        spouse_id: '5d49d397-ba09-4655-83a1-4cf73bdc73bf',
                        user_id: 'f87fa025-9447-429b-81ce-16617013c499',
                        family_id: 'e72d7850-6823-4a78-8a41-052791b08b19',
                        spouse_detail: {
                          user_id: '5d49d397-ba09-4655-83a1-4cf73bdc73bf',
                          first_name: 'Zenia',
                          last_name: 'Thaddeus',
                          gender: 2,
                          unique_code: null,
                          profile_pic: null,
                          friendRequest: null,
                        },
                        childrens: [],
                      },
                      {
                        id: 'e2539682-e96f-455b-b237-b5f62a9969ea',
                        spouse_id: '377108d6-5549-4a8f-a806-cbde4ca632ec',
                        user_id: 'f87fa025-9447-429b-81ce-16617013c499',
                        family_id: 'e72d7850-6823-4a78-8a41-052791b08b19',
                        spouse_detail: {
                          user_id: '377108d6-5549-4a8f-a806-cbde4ca632ec',
                          first_name: 'Karyn',
                          last_name: 'Stacey',
                          gender: 2,
                          unique_code: null,
                          profile_pic: null,
                          friendRequest: null,
                        },
                        childrens: [
                          {
                            id: 'e104e338-3263-48d0-8502-db5fe101d305',
                            child_id: 'd21b47c1-38ee-45ed-ab45-0613b7e89167',
                            user_id: '377108d6-5549-4a8f-a806-cbde4ca632ec',
                            family_id: 'e72d7850-6823-4a78-8a41-052791b08b19',
                            child_detail: {
                              user_id: 'd21b47c1-38ee-45ed-ab45-0613b7e89167',
                              first_name: 'Skyler',
                              last_name: 'Oscar',
                              gender: 1,
                              unique_code: null,
                              profile_pic: null,
                              friendRequest: null,
                            },
                          },
                          {
                            id: 'bc98dc64-c220-449f-bbcc-ef6a4d9185df',
                            child_id: 'ba56a757-acfd-4e62-a448-bc97e4df85c9',
                            user_id: '377108d6-5549-4a8f-a806-cbde4ca632ec',
                            family_id: 'e72d7850-6823-4a78-8a41-052791b08b19',
                            child_detail: {
                              user_id: 'ba56a757-acfd-4e62-a448-bc97e4df85c9',
                              first_name: 'Ora',
                              last_name: 'Tanya',
                              gender: 1,
                              unique_code: null,
                              profile_pic: null,
                              friendRequest: null,
                            },
                          },
                        ],
                        children: [
                          {
                            family_relation_id:
                              '3caf3747-c5ba-49bc-9f00-2f91636816a6',
                            father_id: 'f87fa025-9447-429b-81ce-16617013c499',
                            mother_id: '377108d6-5549-4a8f-a806-cbde4ca632ec',
                            family_id: 'e72d7850-6823-4a78-8a41-052791b08b19',
                            user_id: 'd21b47c1-38ee-45ed-ab45-0613b7e89167',
                            order: 3,
                            user_detail: {
                              user_id: 'd21b47c1-38ee-45ed-ab45-0613b7e89167',
                              first_name: 'Skyler',
                              last_name: 'Oscar',
                              gender: 1,
                              unique_code: null,
                              profile_pic: null,
                              friendRequest: null,
                            },
                            spouses: [
                              {
                                id: '4f2b410a-5ecd-48dd-a91d-a5bcdd51e668',
                                spouse_id:
                                  'c012260f-751b-4d38-935f-022ab4e36234',
                                user_id: 'd21b47c1-38ee-45ed-ab45-0613b7e89167',
                                family_id:
                                  'e72d7850-6823-4a78-8a41-052791b08b19',
                                spouse_detail: {
                                  user_id:
                                    'c012260f-751b-4d38-935f-022ab4e36234',
                                  first_name: 'Savannah',
                                  last_name: 'Zenia',
                                  gender: 2,
                                  unique_code: null,
                                  profile_pic: null,
                                  friendRequest: null,
                                },
                                childrens: [],
                              },
                            ],
                          },
                          {
                            family_relation_id:
                              '71d2f040-946d-457c-a090-ed83f4f0aa7e',
                            father_id: 'f87fa025-9447-429b-81ce-16617013c499',
                            mother_id: '377108d6-5549-4a8f-a806-cbde4ca632ec',
                            family_id: 'e72d7850-6823-4a78-8a41-052791b08b19',
                            user_id: 'ba56a757-acfd-4e62-a448-bc97e4df85c9',
                            order: 3,
                            user_detail: {
                              user_id: 'ba56a757-acfd-4e62-a448-bc97e4df85c9',
                              first_name: 'Ora',
                              last_name: 'Tanya',
                              gender: 1,
                              unique_code: null,
                              profile_pic: null,
                              friendRequest: null,
                            },
                            spouses: [],
                          },
                        ],
                      },
                      {
                        id: 'a42a1c5b-428e-418a-a4fb-0a757c14d3fc',
                        spouse_id: '317c22d7-4588-4b51-9c9e-cef6c1af8c0a',
                        user_id: 'f87fa025-9447-429b-81ce-16617013c499',
                        family_id: 'e72d7850-6823-4a78-8a41-052791b08b19',
                        spouse_detail: {
                          user_id: '317c22d7-4588-4b51-9c9e-cef6c1af8c0a',
                          first_name: 'Germane',
                          last_name: 'Linda',
                          gender: 2,
                          unique_code: null,
                          profile_pic: null,
                          friendRequest: null,
                        },
                        childrens: [
                          {
                            id: 'c31a223c-bc5c-44b0-8d17-ce49e7dbfbb1',
                            child_id: 'aec73631-fb31-4441-9ddc-c0179378ccfd',
                            user_id: '317c22d7-4588-4b51-9c9e-cef6c1af8c0a',
                            family_id: 'e72d7850-6823-4a78-8a41-052791b08b19',
                            child_detail: {
                              user_id: 'aec73631-fb31-4441-9ddc-c0179378ccfd',
                              first_name: 'Jade',
                              last_name: 'Garrison',
                              gender: 2,
                              unique_code: null,
                              profile_pic: null,
                              friendRequest: null,
                            },
                          },
                          {
                            id: '50798a9d-91ea-4506-b008-6066a4a75f50',
                            child_id: 'afa0daf8-7b47-46bd-ba74-60ab6cf84a40',
                            user_id: '317c22d7-4588-4b51-9c9e-cef6c1af8c0a',
                            family_id: 'e72d7850-6823-4a78-8a41-052791b08b19',
                            child_detail: {
                              user_id: 'afa0daf8-7b47-46bd-ba74-60ab6cf84a40',
                              first_name: 'Aline',
                              last_name: 'Alexa',
                              gender: 1,
                              unique_code: null,
                              profile_pic: null,
                              friendRequest: null,
                            },
                          },
                        ],
                        children: [
                          {
                            family_relation_id:
                              '96df4b6c-a017-40b2-9b0b-3041c1f97ced',
                            father_id: 'f87fa025-9447-429b-81ce-16617013c499',
                            mother_id: '317c22d7-4588-4b51-9c9e-cef6c1af8c0a',
                            family_id: 'e72d7850-6823-4a78-8a41-052791b08b19',
                            user_id: 'afa0daf8-7b47-46bd-ba74-60ab6cf84a40',
                            order: 3,
                            user_detail: {
                              user_id: 'afa0daf8-7b47-46bd-ba74-60ab6cf84a40',
                              first_name: 'Aline',
                              last_name: 'Alexa',
                              gender: 1,
                              unique_code: null,
                              profile_pic: null,
                              friendRequest: null,
                            },
                            spouses: [],
                          },
                          {
                            family_relation_id:
                              'd82b8fd4-b496-47d5-8fe5-2fcc73ca33df',
                            father_id: 'f87fa025-9447-429b-81ce-16617013c499',
                            mother_id: '317c22d7-4588-4b51-9c9e-cef6c1af8c0a',
                            family_id: 'e72d7850-6823-4a78-8a41-052791b08b19',
                            user_id: 'aec73631-fb31-4441-9ddc-c0179378ccfd',
                            order: 3,
                            user_detail: {
                              user_id: 'aec73631-fb31-4441-9ddc-c0179378ccfd',
                              first_name: 'Jade',
                              last_name: 'Garrison',
                              gender: 2,
                              unique_code: null,
                              profile_pic: null,
                              friendRequest: null,
                            },
                            spouses: [],
                          },
                        ],
                      },
                      {
                        id: '3d88c30f-0f2f-4a50-88fc-ad229f6a8582',
                        spouse_id: 'ad62101b-5aea-438f-a4f1-d9ab2da96734',
                        user_id: 'f87fa025-9447-429b-81ce-16617013c499',
                        family_id: 'e72d7850-6823-4a78-8a41-052791b08b19',
                        spouse_detail: {
                          user_id: 'ad62101b-5aea-438f-a4f1-d9ab2da96734',
                          first_name: 'Bree',
                          last_name: 'Uma',
                          gender: 2,
                          unique_code: null,
                          profile_pic: null,
                          friendRequest: null,
                        },
                        childrens: [],
                      },
                    ],
                  },
                  {
                    family_relation_id: 'afafb0b6-e2ea-49fa-9ec0-d0851d8363bc',
                    father_id: 'bb5c4309-9b97-4ff3-853b-92588fbf2618',
                    mother_id: '4b5cc24a-e757-4121-a345-42679710021b',
                    family_id: 'e72d7850-6823-4a78-8a41-052791b08b19',
                    user_id: '0a8eb535-2769-4820-87f8-1be1530c7463',
                    order: 2,
                    user_detail: {
                      user_id: '0a8eb535-2769-4820-87f8-1be1530c7463',
                      first_name: 'Wilma',
                      last_name: 'Jael',
                      gender: 2,
                      unique_code: null,
                      profile_pic: null,
                      friendRequest: null,
                    },
                    spouses: [],
                  },
                  {
                    family_relation_id: 'e377107f-1ac5-4890-9aee-60eaad9d5863',
                    father_id: 'bb5c4309-9b97-4ff3-853b-92588fbf2618',
                    mother_id: '4b5cc24a-e757-4121-a345-42679710021b',
                    family_id: 'e72d7850-6823-4a78-8a41-052791b08b19',
                    user_id: 'bfc1d531-8c51-4fda-ab10-63327572e7fc',
                    order: 2,
                    user_detail: {
                      user_id: 'bfc1d531-8c51-4fda-ab10-63327572e7fc',
                      first_name: 'Colin',
                      last_name: 'Minerva',
                      gender: 2,
                      unique_code: null,
                      profile_pic: null,
                      friendRequest: null,
                    },
                    spouses: [],
                  },
                ],
              },
              {
                id: '064b6c24-e3de-4b6b-81d7-d2bc6e96cbaa',
                spouse_id: '52ffe9a2-0cba-45b6-a6a5-9032ec9757a9',
                user_id: 'bb5c4309-9b97-4ff3-853b-92588fbf2618',
                family_id: 'e72d7850-6823-4a78-8a41-052791b08b19',
                spouse_detail: {
                  user_id: '52ffe9a2-0cba-45b6-a6a5-9032ec9757a9',
                  first_name: 'Frances',
                  last_name: 'Brianna',
                  gender: 2,
                  unique_code: null,
                  profile_pic: null,
                  friendRequest: null,
                },
                childrens: [
                  {
                    id: '75fc5cc9-5940-440d-931a-83fe82488cf2',
                    child_id: '2e96e0fa-9f9f-4f96-87db-2cc757d9f0d4',
                    user_id: '52ffe9a2-0cba-45b6-a6a5-9032ec9757a9',
                    family_id: 'e72d7850-6823-4a78-8a41-052791b08b19',
                    child_detail: {
                      user_id: '2e96e0fa-9f9f-4f96-87db-2cc757d9f0d4',
                      first_name: 'Price',
                      last_name: 'Eden',
                      gender: 1,
                      unique_code: null,
                      profile_pic: null,
                      friendRequest: null,
                    },
                  },
                ],
                children: [
                  {
                    family_relation_id: 'e00f18fe-b59c-4acf-9680-56bfeef853d0',
                    father_id: 'bb5c4309-9b97-4ff3-853b-92588fbf2618',
                    mother_id: '52ffe9a2-0cba-45b6-a6a5-9032ec9757a9',
                    family_id: 'e72d7850-6823-4a78-8a41-052791b08b19',
                    user_id: '2e96e0fa-9f9f-4f96-87db-2cc757d9f0d4',
                    order: 2,
                    user_detail: {
                      user_id: '2e96e0fa-9f9f-4f96-87db-2cc757d9f0d4',
                      first_name: 'Price',
                      last_name: 'Eden',
                      gender: 1,
                      unique_code: null,
                      profile_pic: null,
                      friendRequest: null,
                    },
                    spouses: [],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  };
}
