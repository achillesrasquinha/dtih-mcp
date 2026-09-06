# life-science-mcp

A unified MCP server for 209 life science APIs and databases (195 free, 14 API key).

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

## Providers (209)

| Provider | Description | Auth |
|----------|-------------|------|
| [1000 Genomes (IGSR)](https://www.internationalgenome.org/api) | International Genome Sample Resource — population genomics data from the 1000 Genomes Project | Free |
| [Addgene](https://www.addgene.org/api) | Addgene — nonprofit plasmid repository for sharing molecular biology reagents | Free |
| [AIRR Data Commons](https://vdjserver.org/airr/v1) | AIRR Data Commons — adaptive immune receptor repertoire sequencing data | Free |
| [Allen Brain Atlas](https://api.brain-map.org/api/v2) | Allen Institute brain gene expression and connectivity data | Free |
| [AlphaFold DB](https://alphafold.ebi.ac.uk/api) | AI-predicted protein structures from DeepMind | Free |
| [AquaMaps](https://aquamaps.org/webservice) | AquaMaps — predicted species distribution maps for marine and freshwater organisms | Free |
| [ArrayExpress](https://www.ebi.ac.uk/biostudies/api/v1) | ArrayExpress — gene expression and functional genomics experiments archive (EBI BioStudies) | Free |
| [ATC Classification](https://rxnav.nlm.nih.gov/REST/rxclass) | ATC (Anatomical Therapeutic Chemical) drug classification via RxNav/RxClass API | Free |
| [BERN2](https://bern2.korea.ac.kr) | BERN2 biomedical named entity recognition — extract genes, diseases, drugs, and other entities from text | Free |
| [Bgee](https://www.bgee.org/api) | Gene expression evolution database — expression across species and tissues | Free |
| [BiGG Models](https://bigg.ucsd.edu/api/v2) | BiGG Models — genome-scale metabolic network reconstructions | Free |
| [BindingDB](https://bindingdb.org/axis2/services/BDBService) | Public database of measured binding affinities between proteins and drug-like molecules | Free |
| [BioCyc](https://websvc.biocyc.org) | BioCyc / MetaCyc — metabolic pathway and genome database collection | Free |
| [BioGRID](https://webservice.thebiogrid.org) | BioGRID database of protein and genetic interactions | API Key |
| [BioModels](https://biomodels.org) | BioModels repository — mathematical models of biological systems in SBML and other formats | Free |
| [BioPortal](https://data.bioontology.org) | NCBO BioPortal — search 900+ biomedical ontologies and annotate text with ontology concepts | API Key |
| [bioRxiv](https://api.biorxiv.org) | bioRxiv preprint server — access preprints in biology and related sciences | Free |
| [BioSamples](https://www.ebi.ac.uk/biosamples) | EBI BioSamples database — biological sample metadata and attributes | Free |
| [BOLD](https://www.boldsystems.org/index.php/API_Public) | Barcode of Life Data Systems — DNA barcode specimens and sequences for species identification | Free |
| [BrainSpan](https://api.brain-map.org/api/v2/data) | BrainSpan developmental transcriptome — human brain gene expression across developmental stages | Free |
| [CADD](https://cadd.gs.washington.edu/api/v1.0) | Combined Annotation Dependent Depletion — variant deleteriousness scoring | Free |
| [Catalogue of Life](https://api.catalogueoflife.org) | Catalogue of Life — global checklist of all known species with authoritative taxonomy | Free |
| [cBioPortal](https://www.cbioportal.org/api) | Cancer genomics portal — explore multidimensional cancer genomics data | Free |
| [CDC Open Data](https://data.cdc.gov/resource) | CDC Open Data — public health datasets via the Socrata Open Data API | Free |
| [CDC WONDER](https://wonder.cdc.gov/controller/datarequest) | CDC WONDER — Wide-ranging Online Data for Epidemiologic Research, public health datasets | Free |
| [CDD](https://www.ncbi.nlm.nih.gov/Structure/bwrpsb/bwrpsb.cgi) | NCBI Conserved Domain Database — identify conserved domains in protein sequences | Free |
| [Cellosaurus](https://api.cellosaurus.org) | Knowledge resource on cell lines — cell line identification and characterization | Free |
| [CELLxGENE](https://api.cellxgene.cziscience.com) | CZ CELLxGENE Discover — single-cell datasets and gene expression | Free |
| [ChEBI (via OLS4)](https://www.ebi.ac.uk/ols4/api) | Chemical Entities of Biological Interest — ontology lookup via EBI OLS4 | Free |
| [ChEMBL](https://www.ebi.ac.uk/chembl/api/data) | Database of bioactive drug-like small molecules | Free |
| [CIViC](https://civicdb.org/api/graphql) | Clinical Interpretations of Variants in Cancer — curated clinical evidence for variants | Free |
| [ClassyFire](http://classyfire.wishartlab.com) | Automated chemical classification using the ChemOnt ontology | Free |
| [ClinGen](https://search.clinicalgenome.org/kb/rest) | Clinical Genome Resource — gene-disease validity and dosage sensitivity curation | Free |
| [ClinicalTrials.gov](https://clinicaltrials.gov/api/v2) | Registry of clinical studies conducted around the world | Free |
| [ClinVar](https://eutils.ncbi.nlm.nih.gov/entrez/eutils) | Variant-disease relationship database linking genetic variants to clinical significance | Free |
| [Clustal Omega](https://www.ebi.ac.uk/Tools/services/rest/clustalo) | EBI Clustal Omega multiple sequence alignment service | Free |
| [COCONUT](https://coconut.naturalproducts.net/api) | COlleCtion of Open Natural prodUcTs — comprehensive natural products database | Free |
| [Comparative Toxicogenomics Database](https://ctdbase.org/tools/batchQuery.go) | CTD curated chemical-gene-disease interactions for toxicogenomics research | Free |
| [CompTox](https://comptox.epa.gov/dashboard-api) | EPA CompTox Chemicals Dashboard for toxicology and chemical safety | Free |
| [DailyMed](https://dailymed.nlm.nih.gov/dailymed/services) | DailyMed drug label information from the National Library of Medicine — SPL documents and prescribing information | Free |
| [DALI](http://ekhidna2.biocenter.helsinki.fi/dali) | DALI server — protein structure comparison by 3D alignment | Free |
| [dbGaP](https://www.ncbi.nlm.nih.gov/gap/phegeni) | dbGaP (database of Genotypes and Phenotypes) — genotype-phenotype association studies | Free |
| [dbSNP](https://eutils.ncbi.nlm.nih.gov/entrez/eutils) | Database of single nucleotide polymorphisms and other genetic variation | Free |
| [dbVar](https://eutils.ncbi.nlm.nih.gov/entrez/eutils) | NCBI dbVar — database of genomic structural variants (CNVs, insertions, deletions, inversions) | Free |
| [DDBJ](https://getentry.ddbj.nig.ac.jp/getentry) | DNA Data Bank of Japan — nucleotide sequence archive | Free |
| [DeepLoc 2.0](https://api.biolib.com/app/DTU/DeepLoc-2.0) | DeepLoc 2.0 — protein subcellular localization prediction (DTU BioLib) | Free |
| [DepMap](https://depmap.org/portal/api) | Cancer Dependency Map — cell line genomic and dependency data | Free |
| [DGIdb](https://dgidb.org/api/graphql) | Drug-Gene Interaction Database — mining drug-gene interaction data | Free |
| [DisGeNET](https://www.disgenet.org/api) | Gene-disease association database | API Key |
| [DisProt](https://disprot.org/api) | Database of intrinsically disordered proteins and regions | Free |
| [DrugCentral](https://unmtid-shinyapps.net/download/DrugCentral) | Drug information resource integrating drug indications, mechanisms, and interactions | Free |
| [eBird](https://api.ebird.org/v2) | Cornell Lab eBird — bird observations, hotspots, and taxonomy worldwide | API Key |
| [EggNOG](http://eggnog5.embl.de) | Orthologous groups and functional annotation from EggNOG | Free |
| [EMDB](https://www.ebi.ac.uk/emdb/api) | Electron Microscopy Data Bank — 3D cryo-EM density maps and tomograms | Free |
| [EMPIAR](https://www.ebi.ac.uk/empiar/api) | Electron Microscopy Public Image Archive for raw EM data | Free |
| [ENCODE SCREEN](https://api.wenglab.org/screen) | ENCODE SCREEN registry of candidate cis-regulatory elements (cCREs) | Free |
| [ENCODE](https://www.encodeproject.org) | Encyclopedia of DNA Elements — functional annotations of the human genome | Free |
| [Enrichr](https://maayanlab.cloud/Enrichr) | Enrichr — gene set enrichment analysis against curated gene-set libraries | Free |
| [Ensembl BioMart](https://www.ensembl.org/biomart/martservice) | Ensembl BioMart bulk annotation and data retrieval service | Free |
| [Ensembl VEP](https://rest.ensembl.org) | Variant Effect Predictor — predict functional effects of genetic variants | Free |
| [Ensembl](https://rest.ensembl.org) | Genome browser and annotation database | Free |
| [EU Clinical Trials Register](https://euclinicaltrials.eu/ctis-public/api) | European Union Clinical Trials Register for searching EU clinical studies | Free |
| [Europe PMC](https://www.ebi.ac.uk/europepmc/webservices/rest) | Europe PubMed Central — open-access biomedical literature | Free |
| [European Genome-phenome Archive](https://ega-archive.org/metadata/v2) | EGA metadata API for controlled-access genomic and phenomic datasets | Free |
| [European Nucleotide Archive](https://www.ebi.ac.uk/ena) | Open-access nucleotide sequence data and associated information | Free |
| [Expression Atlas](https://www.ebi.ac.uk/gxa/json) | Gene expression patterns across species and biological conditions (EBI) | Free |
| [FAOSTAT](https://fenixservices.fao.org/faostat/api/v1/en) | FAO Statistics — food and agriculture data from the UN FAO | Free |
| [FDA Orange Book](https://api.fda.gov/drug) | FDA Orange Book drug patent and exclusivity data via openFDA | Free |
| [FHIR R4](https://hapi.fhir.org/baseR4) | FHIR R4 public test server — HL7 FHIR standard for healthcare data interoperability | Free |
| [FishBase](https://fishbase.ropensci.org) | FishBase — comprehensive database of fish species biology, ecology, and taxonomy | Free |
| [FlyBase](https://api.flybase.org/api/v1.0) | FlyBase — Drosophila melanogaster genomics, genetics, and molecular biology | Free |
| [g:Profiler](https://biit.cs.ut.ee/gprofiler) | g:Profiler — functional enrichment and gene ID conversion | Free |
| [GARD](https://rarediseases.info.nih.gov/gard-api) | GARD — Genetic and Rare Diseases Information Center from NIH | Free |
| [GBIF](https://api.gbif.org/v1) | Global Biodiversity Information Facility — species occurrence and taxonomy data worldwide | Free |
| [GDC](https://api.gdc.cancer.gov) | NCI Genomic Data Commons — cancer genomics data from TCGA and other programs | Free |
| [Gene Expression Omnibus](https://eutils.ncbi.nlm.nih.gov/entrez/eutils) | Repository of high-throughput gene expression and genomics datasets | Free |
| [Gene Ontology](https://api.geneontology.org/api) | Gene Ontology API — GO terms, annotations, and bioentity information | Free |
| [GeneMANIA](https://genemania.org/api) | GeneMANIA — gene interaction network prediction and visualization | Free |
| [GlyCosmos](https://glycosmos.org/api) | GlyCosmos — integrated glycoscience portal for glycan structures, pathways, and diseases | Free |
| [GlyGen](https://api.glygen.org) | GlyGen — glycoscience data integration and retrieval | Free |
| [GlyTouCan](https://api.glycosmos.org) | GlyTouCan — international glycan structure repository | Free |
| [gnomAD](https://gnomad.broadinstitute.org/api) | Genome Aggregation Database — population variant frequencies and annotations | Free |
| [GNPS](https://gnps.ucsd.edu/ProteoSAFe) | GNPS — molecular networking and spectral library for mass spectrometry data | Free |
| [GPCRdb](https://gpcrdb.org/services) | GPCR database — G protein-coupled receptor structures, sequences, and pharmacology | Free |
| [Gramene](https://data.gramene.org) | Gramene — comparative plant genomics resource for crops and model species | Free |
| [GTEx Portal](https://gtexportal.org/api/v2) | Genotype-Tissue Expression project — gene expression across human tissues | Free |
| [Guide to Pharmacology](https://www.guidetopharmacology.org/services) | IUPHAR/BPS Guide to Pharmacology database of drug targets and ligands | Free |
| [GWAS Catalog](https://www.ebi.ac.uk/gwas/rest/api) | NHGRI-EBI Catalog of genome-wide association studies | Free |
| [HGNC](https://rest.genenames.org) | HUGO Gene Nomenclature Committee — approved human gene symbols and names | Free |
| [HMMER](https://www.ebi.ac.uk/Tools/hmmer) | HMMER protein sequence search using profile hidden Markov models | Free |
| [Human Cell Atlas](https://service.azul.data.humancellatlas.org) | Human Cell Atlas data portal — single-cell genomics projects and datasets | Free |
| [Human Metabolome Database](https://hmdb.ca) | HMDB — comprehensive human metabolite and biomarker database | Free |
| [Human Phenotype Ontology](https://ontology.jax.org/api/hp) | Human Phenotype Ontology — standardized vocabulary of human phenotypic abnormalities | Free |
| [Human Protein Atlas](https://www.proteinatlas.org) | Human protein expression and localization data across tissues and cell types | Free |
| [I-TASSER](https://zhanggroup.org/I-TASSER) | I-TASSER — protein structure and function prediction server (Zhang Lab) | Free |
| [IEDB](https://query-api.iedb.org) | Immune Epitope Database — curated epitope data for immune research | Free |
| [iGEM Registry](https://igem.org/api/v1) | iGEM Registry of Standard Biological Parts — synthetic biology parts catalog | Free |
| [IHEC](https://epigenomesportal.ca/ihec/api/v2) | International Human Epigenome Consortium — reference epigenome datasets and metadata | Free |
| [ImmPort](https://www.immport.org/shared/api) | Immunology Database and Analysis Portal — shared immunology data | Free |
| [iNaturalist](https://api.inaturalist.org/v1) | iNaturalist — citizen-science biodiversity observations and taxa worldwide | Free |
| [IntAct](https://www.ebi.ac.uk/intact/ws) | Molecular interaction database — curated protein-protein interactions | Free |
| [InterPro](https://www.ebi.ac.uk/interpro/api) | Protein families, domains, and functional sites classification | Free |
| [IPD-IMGT/HLA](https://www.ebi.ac.uk/ipd/imgt/hla/api) | IPD-IMGT/HLA allele database — HLA allele sequences, nomenclature, and immunogenetics data | Free |
| [iPTMnet](https://research.bioinformatics.udel.edu/iptmnet/api) | iPTMnet — post-translational modification (PTM) knowledge base for proteins | Free |
| [iTOL](https://itol.embl.de) | iTOL Interactive Tree of Life — phylogenetic tree upload, annotation, and export | Free |
| [IUCN Red List](https://apiv3.iucnredlist.org/api/v3) | IUCN Red List of Threatened Species — conservation status for 150,000+ species | API Key |
| [JASPAR](https://jaspar.elixir.no/api/v2) | JASPAR — open-access database of transcription factor binding profiles | Free |
| [KEGG](https://rest.kegg.jp) | Kyoto Encyclopedia of Genes and Genomes — pathway and molecular interaction database | Free |
| [LIPID MAPS](https://www.lipidmaps.org/rest) | LIPID MAPS Structure Database for lipid classification and structures | Free |
| [LOINC](https://fhir.loinc.org) | LOINC clinical terminology — standardized codes for lab tests, clinical observations, and measurements via FHIR | API Key |
| [MaizeGDB](https://www.maizegdb.org/api) | MaizeGDB — maize genetics and genomics database for corn research | Free |
| [MalaCards](https://www.malacards.org/api/v2) | MalaCards — human disease database integrating gene, variant, and pathway data | Free |
| [MassBank](https://massbank.eu/MassBank/api) | Public repository of mass spectra for metabolite identification | Free |
| [MeSH](https://eutils.ncbi.nlm.nih.gov/entrez/eutils) | Medical Subject Headings vocabulary for indexing biomedical literature | Free |
| [MetaboLights](https://www.ebi.ac.uk/metabolights/ws) | EMBL-EBI database for metabolomics experiments and derived information | Free |
| [Metabolomics Workbench](https://www.metabolomicsworkbench.org/rest) | Metabolomics Workbench — metabolomics data repository and metadata | Free |
| [METLIN](https://metlin.scripps.edu/rest/api) | METLIN metabolite mass spectrometry database for metabolomics research | API Key |
| [MGnify](https://www.ebi.ac.uk/metagenomics/api/v1) | MGnify — EBI metagenomics analysis and archiving platform | Free |
| [MicrobiomeDB](https://microbiomedb.org/mbio/service) | MicrobiomeDB — microbiome study data including taxonomic and functional profiling | Free |
| [MobiDB](https://mobidb.org/api) | Protein disorder and mobility annotations | Free |
| [ModelSEED](https://modelseed.org/api/v2) | ModelSEED — automated metabolic model reconstruction and biochemistry database | Free |
| [Monarch Initiative](https://api.monarchinitiative.org/v3/api) | Knowledge graph integrating biological and clinical data for disease discovery | Free |
| [Movebank](https://www.movebank.org/movebank/service/direct-read) | Movebank — animal tracking and movement data from global research studies | Free |
| [MSigDB](https://www.gsea-msigdb.org/gsea/msigdb/human) | Molecular Signatures Database — curated gene set collections for enrichment analysis | Free |
| [MyChem.info](https://mychem.info/v1) | Chemical and drug annotation query service — aggregates compound data from multiple sources | Free |
| [MyDisease.info](https://mydisease.info/v1) | Disease annotation query service — aggregates disease data from multiple sources | Free |
| [MyGene.info](https://mygene.info/v3) | Gene annotation query service — aggregated gene info from multiple sources | Free |
| [MyVariant.info](https://myvariant.info/v1) | Variant annotation query service — aggregates genetic variant data from multiple sources | Free |
| [Natural Products Atlas](https://www.npatlas.org/api/v1) | Database of microbially-derived natural products for drug discovery | Free |
| [NatureServe](https://explorer.natureserve.org/api/data) | NatureServe Explorer — conservation status and biodiversity data for species across the Americas | API Key |
| [NCBI BioSample](https://eutils.ncbi.nlm.nih.gov/entrez/eutils) | Database of biological sample metadata used in experimental assays | Free |
| [NCBI BLAST](https://blast.ncbi.nlm.nih.gov/blast/Blast.cgi) | NCBI BLAST sequence similarity search — submit queries and retrieve alignment results | Free |
| [NCBI Datasets](https://api.ncbi.nlm.nih.gov/datasets/v2) | NCBI Datasets API v2 — modern REST interface for genes, genomes, and taxonomy | Free |
| [NCBI Gene](https://eutils.ncbi.nlm.nih.gov/entrez/eutils) | Gene-specific information from NCBI Entrez Gene database | Free |
| [NCBI Nucleotide](https://eutils.ncbi.nlm.nih.gov/entrez/eutils) | GenBank and RefSeq nucleotide sequence database | Free |
| [NCBI Protein](https://eutils.ncbi.nlm.nih.gov/entrez/eutils) | Protein sequence database including RefSeq, UniProt, and PDB sequences | Free |
| [NCBI SRA](https://eutils.ncbi.nlm.nih.gov/entrez/eutils) | Sequence Read Archive — raw sequencing data repository | Free |
| [NCBI Taxonomy](https://eutils.ncbi.nlm.nih.gov/entrez/eutils) | Taxonomic classification and nomenclature database | Free |
| [NCBO Annotator](https://data.bioontology.org) | NCBO Annotator — annotate biomedical text with ontology concepts and get ontology recommendations | API Key |
| [NCI Chemical Identifier Resolver](https://cactus.nci.nih.gov/chemical/structure) | NCI CADD Chemical Identifier Resolver — convert between chemical names, SMILES, InChI, and other formats | Free |
| [NDEx](https://www.ndexbio.org/v2) | NDEx Network Data Exchange for biological network models | Free |
| [NetMHCIIpan](https://services.healthtech.dtu.dk/api) | NetMHCIIpan 4.3 — MHC class II binding prediction for peptides across HLA-DR/DP/DQ alleles | Free |
| [NetMHCpan](https://services.healthtech.dtu.dk/api) | NetMHCpan 4.1 — MHC class I binding prediction for peptides across HLA alleles | Free |
| [OBIS](https://api.obis.org/v3) | Ocean Biodiversity Information System — marine species occurrence and distribution data | Free |
| [OLS](https://www.ebi.ac.uk/ols4/api) | Ontology Lookup Service — search and browse biomedical ontologies (GO, EFO, HPO, etc.) | Free |
| [OMA](https://omabrowser.org/api) | Orthologous Matrix — comprehensive ortholog database | Free |
| [OMIM](https://api.omim.org/api) | Online Mendelian Inheritance in Man — catalog of human genes and genetic disorders | API Key |
| [OmniPath](https://omnipathdb.org) | OmniPath — comprehensive signaling network and enzyme-substrate interactions | Free |
| [OneZoom](https://www.onezoom.org/api/v1) | OneZoom tree of life explorer — interactive visualization and species search across the tree of life | Free |
| [Open Targets](https://api.platform.opentargets.org/api/v4/graphql) | Drug target identification and prioritization platform | Free |
| [Open Tree of Life](https://api.opentreeoflife.org/v3) | Open Tree of Life — comprehensive phylogenetic tree and taxonomy synthesis | Free |
| [OpenAlex](https://api.openalex.org) | OpenAlex — open catalog of scholarly works, authors, institutions, and concepts | Free |
| [OpenCitations](https://opencitations.net/index/coci/api/v1) | OpenCitations COCI citation index — open bibliographic citation data for DOIs | Free |
| [openFDA](https://api.fda.gov) | Open-access FDA data on drugs, devices, and foods including adverse events | Free |
| [Orphanet](https://api.orphacode.org) | Orphanet — reference portal for rare diseases and orphan drugs | Free |
| [OrthoDB](https://data.orthodb.org/v12) | Hierarchical catalog of orthologs — gene evolutionary relationships | Free |
| [PANTHER](https://pantherdb.org/services/oai/pantherdb) | PANTHER — protein classification, gene ontology, and phylogenetic analysis | Free |
| [Pathway Commons](https://www.pathwaycommons.org/pc2) | Integrated biological pathway and interaction data from multiple sources | Free |
| [PDBe](https://www.ebi.ac.uk/pdbe/api) | Protein Data Bank in Europe — macromolecular structure data | Free |
| [PeptideAtlas](https://db.systemsbiology.net/sbeams/cgi/PeptideAtlas) | PeptideAtlas — proteomics data repository for peptide and protein identifications | Free |
| [Pfam](https://www.ebi.ac.uk/interpro/api) | Pfam protein families database — protein domain classification via InterPro | Free |
| [PharmGKB (CPIC)](https://api.cpicpgx.org/v1) | CPIC pharmacogenomics knowledge base — drug-gene pairs, clinical guidelines, and pharmacogenomic recommendations | Free |
| [PhyloT](https://phylot.biobyte.de/api) | PhyloT — taxonomy-based phylogenetic tree generation from NCBI taxon IDs | Free |
| [pkCSM](https://biosig.lab.uq.edu.au/pkcsm) | pkCSM pharmacokinetics and toxicity prediction using graph-based signatures | Free |
| [Planteome](https://planteome.org/api) | Planteome — plant trait ontologies and gene annotations for plant biology | Free |
| [PRIDE](https://www.ebi.ac.uk/pride/ws/archive/v2) | PRIDE proteomics archive — mass spectrometry proteomics data repository | Free |
| [PubChem](https://pubchem.ncbi.nlm.nih.gov/rest/pug) | Open chemistry database with compound, substance, and bioassay data | Free |
| [PubMed](https://eutils.ncbi.nlm.nih.gov/entrez/eutils) | Biomedical literature search engine (NCBI) | Free |
| [PubTator](https://www.ncbi.nlm.nih.gov/research/pubtator3-api) | PubTator3 biomedical text mining — named entity recognition and annotation of PubMed articles | Free |
| [QuickGO](https://www.ebi.ac.uk/QuickGO/services) | Gene Ontology browser — fast access to GO term information (EBI) | Free |
| [RCSB PDB](https://data.rcsb.org) | Protein Data Bank — 3D structural data for biological macromolecules | Free |
| [Reactome](https://reactome.org) | Curated biological pathway and reaction database | Free |
| [RegulomeDB](https://regulomedb.org) | RegulomeDB — annotate and score regulatory variants in the human genome | Free |
| [Rfam](https://rfam.org) | Database of non-coding RNA families and structured RNA elements | Free |
| [Rhea](https://www.rhea-db.org/rhea) | Expert-curated knowledgebase of biochemical reactions | Free |
| [RNAcentral](https://rnacentral.org/api/v1) | RNAcentral — comprehensive non-coding RNA sequence database | Free |
| [RxNorm](https://rxnav.nlm.nih.gov/REST) | NLM drug terminology for normalized drug names and interactions | Free |
| [SABIO-RK](https://sabiork.h-its.org/sabioRestWebServices) | SABIO-RK enzyme kinetics database — reaction kinetics data and parameters | Free |
| [Semantic Scholar](https://api.semanticscholar.org/graph/v1) | Semantic Scholar academic paper search — find research papers, citations, and author information | API Key |
| [SGD](https://www.yeastgenome.org/backend) | Saccharomyces Genome Database — yeast genomics | Free |
| [SignalP 6.0](https://api.biolib.com/app/DTU/SignalP-6.0) | SignalP 6.0 — signal peptide prediction for protein sequences (DTU BioLib) | Free |
| [SIGNOR](https://signor.uniroma2.it/API) | SIGNOR — signaling network open resource for causal interactions in signaling pathways | Free |
| [Single Cell Portal](https://singlecell.broadinstitute.org/single_cell/api/v1) | Broad Institute Single Cell Portal — explore and share single-cell genomics studies | Free |
| [SNOMED CT](https://tx.fhir.org/r4) | SNOMED CT clinical terminology via FHIR terminology server — look up and search clinical concepts | Free |
| [STITCH](http://stitch-db.org/api) | STITCH chemical-protein interaction database — sister project of STRING | Free |
| [STRING](https://string-db.org/api) | Protein-protein interaction network database | Free |
| [SureChEMBL](https://www.surechembl.org/api) | Patent chemistry database linking chemical structures to patent documents | Free |
| [SwissADME](http://www.swissadme.ch) | SwissADME drug-likeness and pharmacokinetics prediction tool | Free |
| [SwissLipids](https://www.swisslipids.org/api) | SwissLipids — curated knowledge resource for lipid biology and lipidomics | Free |
| [TCIA](https://services.cancerimagingarchive.net/nbia-api/services/v1) | The Cancer Imaging Archive — public access to cancer medical imaging data and collections | Free |
| [TimeTree](https://timetree.org/api) | TimeTree — divergence time estimates between species pairs | Free |
| [ToxCast](https://comptox.epa.gov/dashboard/api) | EPA ToxCast high-throughput toxicity assay screening data | Free |
| [UCSC Genome Browser](https://api.genome.ucsc.edu) | UCSC Genome Browser — genome assemblies, annotations, and track data | Free |
| [UMLS](https://uts-ws.nlm.nih.gov/rest) | Unified Medical Language System — biomedical concepts, terminology crosswalk, and semantic network | API Key |
| [UniCarb-DB](https://unicarb-db.expasy.org/api) | UniCarb-DB — glycan structure database with experimentally determined carbohydrate structures | Free |
| [UniChem](https://www.ebi.ac.uk/unichem/api/v1) | UniChem compound cross-referencing — map chemical identifiers across databases | Free |
| [UniParc](https://rest.uniprot.org/uniparc) | UniProt Archive — comprehensive non-redundant protein sequence archive | Free |
| [UniProt](https://rest.uniprot.org) | Universal Protein Resource — protein sequence and functional information | Free |
| [UniRef](https://rest.uniprot.org/uniref) | UniProt Reference Clusters — clustered sets of related protein sequences | Free |
| [USDA NASS](https://quickstats.nass.usda.gov/api) | USDA National Agricultural Statistics Service — US crop, livestock, and agricultural census data | API Key |
| [VDJdb](https://vdjdb.cdr3.net/api) | VDJdb — curated database of T-cell receptor sequences and specificities | Free |
| [VertNet](http://api.vertnet-portal.appspot.com/api) | VertNet — vertebrate specimen records from natural history collections worldwide | Free |
| [WHO Global Health Observatory](https://ghoapi.azureedge.net/api) | WHO Global Health Observatory — global health indicators, statistics, and country-level health data | Free |
| [WHO ICD-11](https://id.who.int/icd) | WHO ICD-11 International Classification of Diseases — search and retrieve disease classifications | API Key |
| [WikiPathways](https://cdn.jsdelivr.net/gh/wikipathways/wikipathways-assets@main) | Open biological pathway database — community-curated pathway data | Free |
| [WormBase](https://www.alliancegenome.org/api) | WormBase C. elegans and nematode genomics via the Alliance of Genome Resources API | Free |
| [WoRMS](https://www.marinespecies.org/rest) | World Register of Marine Species — authoritative classification and nomenclature of marine organisms | Free |
| [ZFIN](https://zfin.org/action/api) | ZFIN Zebrafish Information Network — zebrafish genomics, genetics, and phenotype data | Free |
| [ZINC](https://zinc15.docking.org) | Free database of commercially available compounds for virtual screening | Free |

## Example Queries

### Beginner

| Role | Category | Query |
|------|----------|-------|
| Biology Student | Gene basics | *What does the TP53 gene do, where is it in the genome, and what happens when it's mutated?* |
| Pre-med Student | Drug info | *What's the mechanism of action of metformin and what are its common side effects?* |
| Biochemistry Student | Protein structure | *Show me the 3D structure of hemoglobin — how confident are we in the predicted vs. experimental structures?* |
| Genetic Counseling Student | Disease lookup | *What genes are associated with Crohn's disease and which ones are druggable?* |
| Marine Biology Student | Species ID | *I found a marine organism in a tide pool — how do I identify it from a DNA barcode and where does it sit on the tree of life?* |
| Clinical Research Coordinator | Clinical trials | *Are there any clinical trials currently recruiting for glioblastoma immunotherapy?* |
| Biochemistry Student | Pathway intro | *Walk me through the glycolysis pathway — what are the rate-limiting enzymes and are any of them drug targets?* |
| Consumer / Patient | Variant intro | *My 23andMe report flagged a variant in BRCA2 — what does it mean clinically and how common is it?* |
| Graduate Student | Literature | *What are the most-cited papers on CRISPR gene editing in the last two years?* |
| Bioinformatics Student | Sequencing data | *Is there publicly available RNA-seq data for human liver tissue I could use for my thesis?* |
| Ecology Student | Biodiversity | *What bird species have been observed in Costa Rica this month, and which ones are endangered?* |
| Microbiology Student | Microbiome | *What bacterial taxa are most commonly found in human gut microbiome studies, and where can I download the raw data?* |
| Nursing Student | Clinical terminology | *What is the LOINC code for hemoglobin A1c, and how does it map to SNOMED CT?* |
| Plant Science Student | Crop genomics | *What genes control drought tolerance in maize and which ones have been functionally characterized?* |
| Immunology Student | Epitope basics | *What are the known T-cell epitopes for influenza A, and which HLA alleles present them?* |

### Intermediate

| Role | Category | Query |
|------|----------|-------|
| Clinical Pharmacologist | Pharmacogenomics | *My patient had an unexpected bleeding event on standard-dose warfarin — could their genetics explain it? Are there CYP2C9 or VKORC1 variants that alter metabolism, how common are they, and do dosing guidelines exist for those genotypes?* |
| Computational Biologist | Post-GWAS | *A GWAS hit near FOXP3 is associated with autoimmune disease but the causal mechanism is unknown — what regulatory elements sit at that locus, what pathways does FOXP3 participate in, and are there rare Mendelian diseases caused by FOXP3 loss-of-function that might reveal the biology?* |
| Drug Discovery Scientist | Drug repurposing | *Imatinib was designed for BCR-ABL in CML, but it clearly hits other kinases — what are they, are any implicated in non-cancer diseases like pulmonary hypertension or fibrosis, and is anyone running trials for those indications?* |
| Evolutionary Biologist | Evolutionary puzzle | *The FOXP2 "language gene" is famous for being highly conserved yet functionally divergent in humans — how does its domain architecture differ across primates, rodents, and songbirds, and when did the key changes occur?* |
| Conservation Ecologist | Invasion ecology | *Lionfish are devastating Caribbean reefs but thriving — where exactly are they showing up outside their native range, what native predators occupy the same ecological niche, and has anyone profiled how their gut microbiome shifts in the invaded habitat?* |
| Endocrinologist | Metabolic disease | *Branched-chain amino acids keep showing up as elevated in pre-diabetic patients — what enzymes degrade them, are those enzyme genes differentially expressed in diabetic pancreatic islets, and are there any compounds that modulate those enzymes?* |
| Cancer Biologist | Cancer dependencies | *Which genes are selectively essential in pancreatic cancer cell lines but not in normal cells? Do any of those represent druggable vulnerabilities, and what somatic mutations do they carry in TCGA samples?* |
| Clinical Geneticist | Diagnostic odyssey | *A child presents with seizures, intellectual disability, and microcephaly — what genes could explain all three phenotypes together, which of those have known pathogenic variants, and could any match a described rare disease?* |
| Neuroimmunologist | Neuroimmunology | *Multiple sclerosis lesions show clonally expanded T cells — what antigens might they be recognizing, what epitopes have been characterized in MS, and is there single-cell data showing what those T cells look like transcriptomically?* |
| Environmental Toxicologist | Toxicology | *A cluster of liver injuries appeared near an industrial site — what chemicals are hepatotoxic, which ones are plausible environmental exposures, and what are their known gene targets and metabolic pathways?* |
| Functional Genomicist | Non-coding regulation | *A risk variant for schizophrenia falls in an intergenic region — is it in a regulatory element, does it alter any transcription factor binding site, and what's the regulome score telling us about its likely functional impact?* |
| Bioinformatician | Gene set analysis | *I have a list of 200 upregulated genes from a differential expression experiment in Alzheimer's brain tissue — what pathways and hallmark signatures are enriched, and do any overlap with known drug target gene sets?* |
| Structural Biologist | Protein classification | *I have an uncharacterized protein sequence from a metagenomic sample — what Pfam domains does it contain, what signal peptides does it have, and where is it predicted to localize in the cell?* |
| Metabolomics Researcher | Metabolite ID | *I got an m/z of 180.0634 in positive mode from a plasma sample — what metabolites could that be, what are their chemical classes, and which pathways are they involved in?* |
| Glycobiologist | Glycan analysis | *I need to find all N-linked glycan structures associated with IgG antibodies — what structures are in the databases, how are they classified, and which diseases show altered glycosylation patterns?* |
| Agricultural Scientist | Crop pathology | *A new wheat rust strain is spreading across East Africa — what's known about its virulence genes, which resistance loci in modern cultivars might hold up, and what do FAO crop production trends look like for affected regions?* |

### Expert

| Role | Category | Query |
|------|----------|-------|
| Pharmacovigilance Scientist | Adverse drug reaction | *A patient on both acetaminophen and isoniazid develops acute liver failure — could isoniazid's CYP2E1 induction push NAPQI production beyond the glutathione detox ceiling? I need the metabolic enzymes involved, whether this patient's population carries high-frequency CYP2E1 gain-of-function variants, the oxidative stress cascade downstream of NAPQI, and whether this specific drug pair has a disproportionate signal in FDA adverse event data.* |
| Translational Oncologist | Resistance mechanism | *A melanoma patient responded to vemurafenib for 8 months then progressed — what bypass signaling mechanisms are reported, do any involve kinases with existing approved inhibitors, what does the crystal structure of drug-resistant BRAF look like compared to wild-type, and are there combination trials actively enrolling patients with acquired BRAF inhibitor resistance?* |
| Microbiome-Gut-Brain Researcher | Gut-brain axis | *SLC6A4 (the serotonin transporter) keeps appearing in both depression GWAS and microbiome association studies — is there a real mechanistic link? I need its expression profile across gut and brain regions, which microbial metabolites feed into serotonin pathways, whether SLC6A4 polymorphisms actually change transporter kinetics, and any clinical evidence connecting gut microbiome composition to SSRI treatment response.* |
| Tumor Immunologist | Neoantigen design | *A tumor exome shows a novel frameshift in TP53 — before I design a neoantigen vaccine, I need to know: what peptides does the frameshift generate, which HLA alleles can present them and how common are those alleles, is the mutant region structurally ordered or floppy, is TP53 actually expressed in this tumor type, and could any of these peptides cross-react with self-proteins?* |
| Deep-Sea Taxonomist | Cryptic species | *We pulled DNA barcodes from a deep-sea hydrothermal vent that match nothing in any sequence archive — what's the closest known organism, where does it fall on the tree of life, has this vent system been surveyed before, do related taxa have sequenced genomes or metagenomes, and has anyone posted preprints from this region recently?* |
| Geriatric Pharmacist | Polypharmacy | *An 82-year-old takes metformin, atorvastatin, amlodipine, and omeprazole daily — I need a full interaction map: which CYP enzymes metabolize each drug, where do they compete, does this patient's pharmacogenomic profile put them at risk, and which pairwise combinations show adverse event signals that aren't covered by existing clinical guidelines?* |
| Systems Biologist | Multi-omics integration | *I want to build a comprehensive molecular map of Type 2 Diabetes — gene-disease associations, GWAS risk loci, tissue-specific expression of the top hits, enriched pathways, protein interaction networks, metabolite biomarkers, druggable targets, rare disease overlaps with shared biology, and active clinical trials. Pull it all together.* |
| Pandemic Preparedness Scientist | Pandemic preparedness | *A novel coronavirus with an unusual spike protein just got sequenced — what are the closest known sequences, which host receptor is it likely using, what immune epitopes from related strains might offer cross-reactive protection, are there existing antivirals targeting similar proteases, and what does the preprint landscape look like in the last 48 hours?* |
| Rare Disease Researcher | Undiagnosed disease | *A patient has a VUS in a gene with no established disease association — what protein domains does the variant fall in, is that residue conserved across orthologs, are there any related genes in the same pathway with known Mendelian phenotypes, and has anyone deposited functional data for nearby variants in ClinVar or published case reports in PubMed?* |
| Synthetic Biologist | Pathway engineering | *I want to engineer a yeast strain to produce artemisinic acid — what are the pathway genes from Artemisia annua, which codon-optimized parts exist in the iGEM registry, what are the known bottleneck enzymes and their kinetic parameters, and has anyone published a chassis strain with the mevalonate pathway already upregulated?* |
| Medicinal Chemist | Lead optimization | *I have a hit compound with an IC50 of 200 nM against JAK2 but poor oral bioavailability — what's its predicted ADMET profile, which structural analogs have better drug-likeness scores, are there co-crystal structures of JAK2 with similar scaffolds, and what binding affinity data exists for related compounds in BindingDB?* |
| Epidemiologist | Global health surveillance | *Maternal mortality rates are rising in Sub-Saharan Africa despite increased healthcare spending — what do the WHO GHO indicators show by country over the last decade, which ICD-11 codes capture the leading causes, are there clinical trials testing community-based interventions in those regions, and what does the recent literature say about the gap between spending and outcomes?* |

## License

MIT — see [LICENSE](LICENSE).
