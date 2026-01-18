import type { StructureResolver } from "sanity/structure";

const SINGLETONS = [
  { type: "availabilityType", title: "Availability", id: "availability" },
] as const;

export const structure: StructureResolver = (S) => {
  return S.list()
    .title("Mitsurin Wagyu")
    .items([
      S.listItem()
        .title("Commerce")
        .child(
          S.list()
            .title("Commerce")
            .items([
              // Singleton: Availability (one doc)
              ...SINGLETONS.map((sng) =>
                S.listItem()
                  .title(sng.title)
                  .child(
                    S.document()
                      .schemaType(sng.type)
                      .documentId(sng.id)
                      .title(sng.title)
                  )
              ),

              S.divider(),

              // Repeatable: Premium Cuts
              S.documentTypeListItem("premiumCutsType")
                .title("Premium Cuts")
                .child(
                  S.documentTypeList("premiumCutsType")
                    .title("Premium Cuts")
                    .defaultOrdering([{ field: "displayOrder", direction: "asc" }])
                ),

              // Repeatable: Cow Purchase Options
              S.documentTypeListItem("cowPurchaseType")
                .title("Cow Purchase Options")
                .child(
                  S.documentTypeList("cowPurchaseType")
                    .title("Cow Purchase Options")
                    .defaultOrdering([{ field: "displayOrder", direction: "asc" }])
                ),
            ])
        ),

      S.divider(),

      // Everything else (hidden from top-level if it's in our explicit list)
      ...S.documentTypeListItems().filter((item) => {
        const id = item.getId();
        if (!id) return false;

        const isExplicit =
          id === "premiumCutsType" ||
          id === "cowPurchaseType" ||
          id === "availabilityType";

        return !isExplicit;
      }),
    ]);
};
