

//Delete existing array files greater than 1

AffiliationFileModel.findOne({ affiliation_id: afn_id, file_type: index }).update({ }, 
        { $pull: {
          "files.$[]": {
            path: actualPath
          }
        }
      },
      { new: true, multi: true})

//Delete last existing array and make it empty

AffiliationFileModel.findOne({ affiliation_id: afn_id, file_type: index }).update({ }, { $pull: { files: { $elemMatch: { path: actualPath  } } } }, { new: true, multi: true } )

Data sample:
 {
  "_id": {
    "$oid": "6582909420ec4005edddee3d"
  },
  "affiliation_id": "AFN001250",
  "file_type": "medical-directory",
  "files": [
    {
      "path": "1703055508123581744348/LITS_OF_DOCTORS.xlsx",
      "encoding": "7bit",
      "mimetype": "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      "size": 9912
    },
    {
      "path": "1703055508124881017873/HOSPITAL PROFILE.docx",
      "encoding": "7bit",
      "mimetype": "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      "size": 11998
    },
    {
      "path": "1703055508124774240458/dental clinic.jpg",
      "encoding": "7bit",
      "mimetype": "image/jpeg",
      "size": 350558
    },
    {
      "path": "1703055508127978127940/APE_PACKAGES - Copy.pdf",
      "encoding": "7bit",
      "mimetype": "application/pdf",
      "size": 41198
    },
    [
      {
        "path": "1703055524512591746811/LITS_OF_DOCTORS.xlsx",
        "encoding": "7bit",
        "mimetype": "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
        "size": 9912
      },
      {
        "path": "170305552451253996632/HOSPITAL PROFILE.docx",
        "encoding": "7bit",
        "mimetype": "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
        "size": 11998
      },
      {
        "path": "1703055524513457317822/dental clinic.jpg",
        "encoding": "7bit",
        "mimetype": "image/jpeg",
        "size": 350558
      },
      {
        "path": "1703055524515871089867/APE_PACKAGES - Copy.pdf",
        "encoding": "7bit",
        "mimetype": "application/pdf",
        "size": 41198
      }
    ]
  ],
  "__v": 0
}
