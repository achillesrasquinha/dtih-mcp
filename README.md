# life-science-mcp

A unified MCP server for 110 life science APIs and databases.

## Installation

```json
{
  "mcpServers": {
    "life-science": {
      "command": "npx",
      "args": ["-y", "life-science-mcp"]
    }
  }
}
```

## Providers (110)

| Provider | Description |
|----------|-------------|
| [AlphaFold DB](https://alphafold.ebi.ac.uk) | AI-predicted protein structures from DeepMind |
| [BERN2](http://bern2.korea.ac.kr) | Biomedical named entity recognition and normalization |
| [Bgee](https://bgee.org) | Gene expression evolution across species and tissues |
| [BiGG Models](http://bigg.ucsd.edu) | Metabolic network reconstructions and flux balance models |
| [BioModels](https://biomodels.org) | Mathematical models of biological systems (SBML) |
| [bioRxiv](https://www.biorxiv.org) | Preprint server for biology |
| [BioSamples](https://www.ebi.ac.uk/biosamples) | EBI biological sample metadata and attributes |
| [BOLD Systems](https://www.boldsystems.org) | Barcode of Life DNA barcode data |
| [Catalogue of Life](https://www.catalogueoflife.org) | Global index of species names and taxonomy |
| [cBioPortal](https://www.cbioportal.org) | Multidimensional cancer genomics data |
| [Cellosaurus](https://www.cellosaurus.org) | Cell line identification and characterization |
| [ChEBI](https://www.ebi.ac.uk/chebi) | Chemical Entities of Biological Interest via OLS4 |
| [ChEMBL](https://www.ebi.ac.uk/chembl) | Bioactive drug-like small molecules |
| [CIViC](https://civicdb.org) | Clinical Interpretations of Variants in Cancer |
| [ClinicalTrials.gov](https://clinicaltrials.gov) | Registry of clinical studies worldwide |
| [ClinVar](https://www.ncbi.nlm.nih.gov/clinvar) | Genetic variants linked to clinical significance |
| [DailyMed](https://dailymed.nlm.nih.gov) | FDA drug labeling and packaging information |
| [dbSNP](https://www.ncbi.nlm.nih.gov/snp) | Single nucleotide polymorphisms and genetic variation |
| [DGIdb](https://dgidb.org) | Drug-gene interaction data |
| [DisGeNET](https://www.disgenet.com) | Gene-disease associations |
| [EMDB](https://www.ebi.ac.uk/emdb) | Electron Microscopy Data Bank for 3D structures |
| [ENA](https://www.ebi.ac.uk/ena) | European Nucleotide Archive sequence data |
| [ENCODE](https://www.encodeproject.org) | Encyclopedia of DNA Elements regulatory data |
| [Enrichr](https://maayanlab.cloud/Enrichr) | Gene set enrichment analysis platform |
| [Ensembl](https://www.ensembl.org) | Genome browser and annotation |
| [Europe PMC](https://europepmc.org) | Open-access biomedical literature |
| [Expression Atlas](https://www.ebi.ac.uk/gxa) | Gene expression patterns across species and conditions |
| [FishBase](https://www.fishbase.org) | Comprehensive fish species database |
| [GBIF](https://www.gbif.org) | Global Biodiversity Information Facility |
| [GDC](https://gdc.cancer.gov) | NCI Genomic Data Commons (TCGA and more) |
| [Gene Ontology](http://geneontology.org) | Functional gene annotations and ontology |
| [GEO](https://www.ncbi.nlm.nih.gov/geo) | Gene Expression Omnibus high-throughput datasets |
| [GlyGen](https://glygen.org) | Integrated glycoscience data for glycans and glycoproteins |
| [GlyTouCan](https://glytoucan.org) | International glycan structure repository |
| [gnomAD](https://gnomad.broadinstitute.org) | Genome Aggregation Database allele frequencies |
| [GPCRdb](https://gpcrdb.org) | G protein-coupled receptor database |
| [g:Profiler](https://biit.cs.ut.ee/gprofiler) | Functional enrichment and gene ID conversion |
| [GTEx](https://gtexportal.org) | Gene expression across human tissues |
| [Guide to Pharmacology](https://www.guidetopharmacology.org) | Drug targets and ligands |
| [GWAS Catalog](https://www.ebi.ac.uk/gwas) | Genome-wide association studies |
| [HGNC](https://www.genenames.org) | Approved human gene symbols and names |
| [HMDB](https://hmdb.ca) | Human Metabolome Database |
| [HPO](https://hpo.jax.org) | Human Phenotype Ontology |
| [Human Protein Atlas](https://www.proteinatlas.org) | Protein expression and localization across tissues |
| [IEDB](https://www.iedb.org) | Immune Epitope Database and Analysis Resource |
| [iNaturalist](https://www.inaturalist.org) | Citizen science biodiversity observations |
| [IntAct](https://www.ebi.ac.uk/intact) | Curated protein-protein interactions |
| [InterPro](https://www.ebi.ac.uk/interpro) | Protein families, domains, and functional sites |
| [JASPAR](https://jaspar.elixir.no) | Transcription factor binding profiles |
| [KEGG](https://www.kegg.jp) | Pathway and molecular interaction database |
| [LIPID MAPS](https://www.lipidmaps.org) | Lipid classification and structures |
| [MassBank](https://massbank.eu) | Mass spectra for metabolite identification |
| [MeSH](https://meshb.nlm.nih.gov) | Medical Subject Headings vocabulary |
| [MetaboLights](https://www.ebi.ac.uk/metabolights) | Metabolomics experiments and derived information |
| [Metabolomics Workbench](https://www.metabolomicsworkbench.org) | Metabolomics data repository and tools |
| [MGnify](https://www.ebi.ac.uk/metagenomics) | EBI metagenomics analysis and archiving |
| [Monarch Initiative](https://monarchinitiative.org) | Knowledge graph for disease discovery |
| [MyChem.info](https://mychem.info) | Aggregated chemical and drug annotations |
| [MyDisease.info](https://mydisease.info) | Aggregated disease annotations |
| [MyGene.info](https://mygene.info) | Aggregated gene annotations |
| [MyVariant.info](https://myvariant.info) | Aggregated genetic variant annotations |
| [Natural Products Atlas](https://www.npatlas.org) | Microbially-derived natural products |
| [NCBI BioSample](https://www.ncbi.nlm.nih.gov/biosample) | Biological sample metadata for experimental assays |
| [NCBI Gene](https://www.ncbi.nlm.nih.gov/gene) | Gene-specific information from Entrez |
| [NCBI Nucleotide](https://www.ncbi.nlm.nih.gov/nucleotide) | GenBank and RefSeq sequences |
| [NCBI Protein](https://www.ncbi.nlm.nih.gov/protein) | Protein sequences from RefSeq, UniProt, PDB |
| [NCBI Taxonomy](https://www.ncbi.nlm.nih.gov/taxonomy) | Taxonomic classification and nomenclature |
| [NCI Chemical Identifier Resolver](https://cactus.nci.nih.gov) | Chemical name/structure resolution and conversion |
| [NDEx](https://www.ndexbio.org) | Biological network models exchange |
| [OBIS](https://obis.org) | Ocean Biodiversity Information System |
| [OLS](https://www.ebi.ac.uk/ols4) | Ontology Lookup Service for biomedical ontologies |
| [OmniPath](https://omnipathdb.org) | Signaling pathway and molecular interaction network |
| [OpenCitations](https://opencitations.net) | Open citation index and bibliometrics |
| [openFDA](https://open.fda.gov) | FDA data on drugs, devices, and adverse events |
| [Open Targets](https://www.opentargets.org) | Drug target identification and prioritization |
| [Open Tree of Life](https://opentreeoflife.github.io) | Comprehensive synthetic phylogenetic tree |
| [Orphanet](https://www.orpha.net) | Rare disease and orphan drug information |
| [OrthoDB](https://www.orthodb.org) | Gene evolutionary relationships and orthologs |
| [PANTHER](http://pantherdb.org) | Protein classification and evolutionary analysis |
| [PDBe](https://www.ebi.ac.uk/pdbe) | Protein Data Bank in Europe |
| [PharmGKB](https://www.pharmgkb.org) | Pharmacogenomics knowledge (via CPIC) |
| [PRIDE](https://www.ebi.ac.uk/pride) | Proteomics identifications database |
| [PubChem](https://pubchem.ncbi.nlm.nih.gov) | Open chemistry database |
| [PubMed](https://pubmed.ncbi.nlm.nih.gov) | Biomedical literature search engine |
| [PubTator](https://www.ncbi.nlm.nih.gov/research/pubtator3) | Biomedical text mining and entity annotation |
| [QuickGO](https://www.ebi.ac.uk/QuickGO) | Gene Ontology browser |
| [RCSB PDB](https://www.rcsb.org) | 3D structural data for biological macromolecules |
| [Reactome](https://reactome.org) | Curated biological pathway database |
| [Rfam](https://rfam.org) | Non-coding RNA families and structured RNA elements |
| [Rhea](https://www.rhea-db.org) | Expert-curated biochemical reactions |
| [RNAcentral](https://rnacentral.org) | Non-coding RNA sequence database |
| [SABIO-RK](http://sabiork.h-its.org) | Enzyme kinetics and biochemical reaction data |
| [Semantic Scholar](https://www.semanticscholar.org) | AI-powered academic paper search and analysis |
| [SNOMED CT](https://www.snomed.org) | Standardized clinical terminology (via FHIR) |
| [STITCH](http://stitch-db.org) | Chemical-protein interaction network |
| [STRING](https://string-db.org) | Protein-protein interaction networks |
| [SwissLipids](https://www.swisslipids.org) | Curated knowledge on lipid biology |
| [TCIA](https://www.cancerimagingarchive.net) | The Cancer Imaging Archive |
| [UCSC Genome Browser](https://genome.ucsc.edu) | Genome browser, tracks, and annotations |
| [UniChem](https://www.ebi.ac.uk/unichem) | Chemical structure cross-referencing |
| [UniParc](https://www.uniprot.org/uniparc) | Non-redundant protein sequence archive |
| [UniProt](https://www.uniprot.org) | Protein sequence and functional information |
| [UniRef](https://www.uniprot.org/uniref) | Clustered protein sequence sets |
| [WHO GHO](https://www.who.int/data/gho) | World Health Organization Global Health Observatory |
| [WikiPathways](https://www.wikipathways.org) | Community-curated biological pathways |
| [WormBase](https://wormbase.org) | C. elegans and nematode genomics |
| [WoRMS](https://www.marinespecies.org) | World Register of Marine Species |
| [ZINC](https://zinc.docking.org) | Commercially available compounds for virtual screening |

## Example Queries

### Beginner

| Category | Query |
|----------|-------|
| Gene lookup | *What is the approved gene symbol for p53 and what chromosome is it on?* |
| Chemistry | *Give me the molecular formula, weight, and canonical SMILES for metformin.* |
| Functional annotation | *What biological process GO terms are annotated to the human insulin receptor gene INSR?* |
| Clinical trials | *Find open clinical trials recruiting patients with glioblastoma.* |
| Taxonomy | *What species are in the family Felidae and how are they classified?* |
| Structural biology | *Retrieve the AlphaFold-predicted structure confidence (pLDDT) for human serum albumin.* |
| Pharmacovigilance | *What are the known side effects of ibuprofen in FDA adverse event reports?* |
| Pathways | *Look up the glycolysis pathway and list the enzymes involved.* |

### Intermediate

| Category | Query |
|----------|-------|
| Pharmacogenomics | *My patient had an unexpected bleeding event on standard-dose warfarin — are there CYP2C9 or VKORC1 variants that could explain abnormal metabolism, and do clinical dosing guidelines exist for those genotypes?* |
| Drug metabolism | *CYP3A4 metabolizes over half of all prescribed drugs — which of its protein interaction partners in liver tissue are also drug-metabolizing enzymes, and do any share substrates that could cause undocumented interactions?* |
| Post-GWAS | *A GWAS hit near FOXP3 is associated with autoimmune disease but the mechanism is unknown — what regulatory elements overlap this locus in ENCODE, what pathways is FOXP3 in, and are there phenotypically similar rare diseases caused by FOXP3 mutations?* |
| Drug repurposing | *Imatinib was designed for BCR-ABL, but what other kinase targets does it hit, are any of those targets implicated in non-cancer diseases, and are there trials testing imatinib for those conditions?* |
| Evolutionary biology | *The FOXP2 "language gene" is highly conserved — how does its protein domain architecture compare across human, mouse, zebrafish, and songbird, and are any domains under positive selection in the human lineage?* |
| Marine ecology | *Lionfish (Pterois volitans) are invasive in the Caribbean — where are they being observed now vs. their native Indo-Pacific range, what native species occupy the same phylogenetic niche, and has anyone studied how their gut microbiome shifts in the invaded habitat?* |
| Metabolic disease | *Branched-chain amino acids are elevated in pre-diabetic patients — which enzymatic pathways degrade them, are the genes for those enzymes differentially expressed in diabetic vs. healthy pancreatic islets, and do any of those enzymes have known drug modulators?* |
| Undiagnosed disease | *A child presents with seizures, intellectual disability, and microcephaly — what genes are associated with all three HPO phenotypes simultaneously, which of those genes have pathogenic variants in ClinVar, and are any located in the patient's candidate region on chromosome 7q?* |

### Expert

| Category | Query |
|----------|-------|
| Adverse drug reaction | *A patient on both acetaminophen and isoniazid develops liver failure — could isoniazid's CYP2E1 induction increase NAPQI formation beyond the glutathione detox capacity? Find the enzymes, check if the patient's population has high-frequency CYP2E1 variants that compound the risk, map the oxidative stress cascade, and see if this specific drug combination has a disproportionate signal in FDA adverse event data.* |
| Resistance mechanism | *A melanoma patient initially responded to vemurafenib (BRAF V600E inhibitor) but progressed after 8 months — what bypass resistance mechanisms are reported in the literature, do any involve kinases with existing approved inhibitors, what does the structural basis of drug-resistant BRAF look like, and are there combination trials enrolling patients with acquired resistance?* |
| Gut-brain axis | *The gene SLC6A4 (serotonin transporter) appears in both depression GWAS and gut microbiome association studies — is there a mechanistic link? Find its expression across gut and brain tissues, identify which gut bacterial metabolites interact with serotonin pathways, check if SLC6A4 polymorphisms alter transporter kinetics, and search for clinical evidence connecting microbiome composition to SSRI treatment response.* |
| Neoantigen prioritization | *A tumor exome reveals a novel frameshift in TP53 — predict the neoantigen peptides, determine which patient HLA alleles could present them, check whether those HLA alleles are common or rare in the patient's population, verify the mutant region has high structural confidence and isn't in a disordered domain, confirm the gene is expressed in the tumor tissue type, and rule out homology to self-proteins that would cause tolerance.* |
| Cryptic species discovery | *DNA barcodes from a deep-sea vent survey match no known species — find the closest sequences in GenBank, place the organism on the tree of life, check if the vent location has been previously surveyed in OBIS or GBIF, identify whether related organisms have characterized genomes or metagenomes, and search preprints for any recent reports from the same vent system.* |
| Polypharmacy risk | *An elderly patient takes metformin, atorvastatin, amlodipine, and omeprazole — map every CYP enzyme involved in metabolizing these four drugs, find shared enzymes where competitive inhibition could alter plasma levels, check if any of the patient's known pharmacogenomic variants affect those specific enzymes, look up FDA adverse event co-occurrence signals for each pairwise drug combination, and identify which interactions lack clinical guideline coverage.* |

## License

MIT — see [LICENSE](LICENSE).
