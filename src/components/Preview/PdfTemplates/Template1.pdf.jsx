import {
    Document,
    Page,
    Text,
    View,
    StyleSheet
} from "@react-pdf/renderer";

const styles = StyleSheet.create({
    page: {
        padding: 32,
        fontFamily: "Helvetica",
        fontSize: 10,
        color: "#111827"
    },

    /* ===== Header ===== */
    header: {
        borderBottomWidth: 2,
        borderBottomColor: "#1F2937",
        paddingBottom: 12,
        marginBottom: 16,
        textAlign: "center"
    },
    name: {
        fontSize: 22,
        fontWeight: "bold",
        marginBottom: 4
    },
    headline: {
        fontSize: 12,
        color: "#374151",
        marginBottom: 8
    },
    contactRow: {
        flexDirection: "row",
        justifyContent: "center",
        flexWrap: "wrap",
        gap: 12
    },
    contactItem: {
        fontSize: 9,
        color: "#4B5563"
    },

    /* ===== Section ===== */
    section: {
        marginBottom: 14
    },
    sectionTitle: {
        fontSize: 11,
        fontWeight: "bold",
        textTransform: "uppercase",
        borderBottomWidth: 1,
        borderBottomColor: "#D1D5DB",
        paddingBottom: 3,
        marginBottom: 6
    },
    bodyText: {
        fontSize: 10,
        color: "#374151",
        lineHeight: 1.4,
        textAlign: "justify"
    },

    /* ===== Skills ===== */
    skillList: {
        flexDirection: "row",
        flexWrap: "wrap",
        gap: 6
    },
    skillItem: {
        borderWidth: 1,
        borderColor: "#D1D5DB",
        paddingHorizontal: 6,
        paddingVertical: 3,
        fontSize: 9
    },

    /* ===== Experience / Education ===== */
    itemBlock: {
        marginBottom: 10
    },
    itemHeader: {
        flexDirection: "row",
        justifyContent: "space-between"
    },
    role: {
        fontSize: 11,
        fontWeight: "bold"
    },
    date: {
        fontSize: 9,
        color: "#6B7280"
    },
    company: {
        fontSize: 10,
        fontWeight: "medium",
        marginBottom: 2
    },
    description: {
        fontSize: 9,
        color: "#4B5563",
        lineHeight: 1.4
    }
});

function Template1PDF({ data }) {
    return (
        <Document>
            <Page size="A4" style={styles.page}>

                {/* ===== Header ===== */}
                <View style={styles.header}>
                    <Text style={styles.name}>{data.name || "John Doe"}</Text>
                    <Text style={styles.headline}>
                        {data.headline || "Professional Headline"}
                    </Text>

                    <View style={styles.contactRow}>
                        {data.email && <Text style={styles.contactItem}>{data.email}</Text>}
                        {data.profileLink && (
                            <Text style={styles.contactItem}>{data.profileLink}</Text>
                        )}
                        {data.address && (
                            <Text style={styles.contactItem}>{data.address}</Text>
                        )}
                    </View>
                </View>

                {/* ===== Summary ===== */}
                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Professional Summary</Text>
                    <Text style={styles.bodyText}>
                        {data.profileSummary ||
                            "Hard-working and results-driven professional with experience delivering measurable results."}
                    </Text>
                </View>

                {/* ===== Skills ===== */}
                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Skills</Text>
                    {data.skills?.length ? (
                        <View style={styles.skillList}>
                            {data.skills.map((skill, i) => (
                                <Text key={i} style={styles.skillItem}>
                                    {skill.name}
                                </Text>
                            ))}
                        </View>
                    ) : (
                        <Text style={styles.bodyText}>No skills added yet.</Text>
                    )}
                </View>

                {/* ===== Experience ===== */}
                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Professional Experience</Text>
                    {data.experience?.length ? (
                        data.experience.map((exp, i) => (
                            <View key={i} style={styles.itemBlock}>
                                <View style={styles.itemHeader}>
                                    <Text style={styles.role}>{exp.role}</Text>
                                    <Text style={styles.date}>
                                        {exp.startDate} – {exp.endDate || "Present"}
                                    </Text>
                                </View>
                                <Text style={styles.company}>{exp.company}</Text>
                                <Text style={styles.description}>{exp.description}</Text>
                            </View>
                        ))
                    ) : (
                        <Text style={styles.bodyText}>No experience added yet.</Text>
                    )}
                </View>

                {/* ===== Education ===== */}
                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Education</Text>
                    {data.education?.length ? (
                        data.education.map((edu, i) => (
                            <View key={i} style={styles.itemHeader}>
                                <View>
                                    <Text style={styles.role}>{edu.degree}</Text>
                                    <Text style={styles.company}>{edu.institution}</Text>
                                </View>
                                <Text style={styles.date}>{edu.graduationDate}</Text>
                            </View>
                        ))
                    ) : (
                        <Text style={styles.bodyText}>No education added yet.</Text>
                    )}
                </View>

                {/* ===== Projects ===== */}
                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Projects</Text>
                    {data.project?.length ? (
                        data.project.map((proj, i) => (
                            <View key={i} style={styles.itemBlock}>
                                <Text style={styles.role}>{proj.name}</Text>
                                <Text style={styles.description}>{proj.description}</Text>
                                {proj.link && (
                                    <Text style={styles.date}>Link: {proj.link}</Text>
                                )}
                            </View>
                        ))
                    ) : (
                        <Text style={styles.bodyText}>No projects added yet.</Text>
                    )}
                </View>

                {/* ===== Certifications ===== */}
                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Certifications</Text>
                    {data.certification?.length ? (
                        data.certification.map((cert, i) => (
                            <View key={i} style={styles.itemHeader}>
                                <View>
                                    <Text style={styles.role}>{cert.name}</Text>
                                    <Text style={styles.company}>{cert.issuedBy}</Text>
                                </View>
                                {cert.link && <Text style={styles.date}>Verify</Text>}
                            </View>
                        ))
                    ) : (
                        <Text style={styles.bodyText}>No certifications added yet.</Text>
                    )}
                </View>

            </Page>
        </Document>
    );
}

export default Template1PDF;
